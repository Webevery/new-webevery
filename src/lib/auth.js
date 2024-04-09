import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDB } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs"

// вынесено в отдельную функцию, ! возможно !, потому что нельзя вызывать сторонние библиотеки в Next-Auth
const login = async (credentials) => {
    try {
        await connectToDB();
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
            throw new Error("Wrong credentials")
        }

        const passwordIsCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!passwordIsCorrect) {
            throw new Error("Wrong credentials")
        }

        return user;
    } catch (error) {
        console.log('error', error);
        throw new Error("Failed to login")
    }

}

// из auth можно взять session и получить данные авторизированного пользователя 
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    // login из этого файла(auth.js)
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    console.log("error", error)
                    return null;
                }
            }
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log(user, account, profile);
            if (account.provider === "google") {
                await connectToDB();
                try {
                    const user = await User.findOne({ email: profile.email });
                    console.log('USER', user)
                } catch (error) {
                    console.log("error", error);
                    return false;
                }
            }
            return true;
        }
    }
})