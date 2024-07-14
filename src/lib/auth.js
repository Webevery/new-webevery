import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { User } from "./models";
import { connectToDB } from "@/utils/connectToDB";
import { authConfig } from "./auth.config";


// вынесено в отдельную функцию, ! возможно !, потому что нельзя вызывать сторонние библиотеки (в данном случае bcrypt) в Next-Auth
const login = async (credentials) => {
    try {
        await connectToDB();
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
            throw new Error("Wrong credentials")
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordCorrect) {
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
    ...authConfig,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    // login из этого файла(т.е. из auth.js)
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
        ...authConfig.callbacks,
    },
})