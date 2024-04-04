import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDB } from "@/lib/utils"
import { User } from "@/lib/models"
import bcrypt from "bcryptjs";

// const login = async (credentials) => {
//     try {
//         connectToDB();
//         const user = await User.findOne({ email: credentials.email });

//         if (!user) throw new Error("Wrong credentials!");

//         const isPasswordCorrect = await bcrypt.compare(
//             credentials.password,
//             user.password
//         );

//         if (!isPasswordCorrect) throw new Error("Wrong credentials!");

//         return user;
//     } catch (err) {
//         if (err.message.includes("CredentialsSignin")) {
//             return { error: "Invalid username or password" };
//         }
//         console.log("err", err);
//         throw new Error("Failed to login!");
//     }
// };

const handler = NextAuth({
    providers: [
        // разрешение для одного пользователя заходить с помощью кнопки Login with ... (в данном случае Google)
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // при заполнении формы руками
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            async authorize(credentials) {
                await connectToDB();

                try {
                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

                        if (isPasswordCorrect) {
                            console.log("password is correct,", "USER", user)
                            return user;
                        } else
                            throw new Error("Wrong credentials");
                    }
                    else
                        throw new Error("Something went wrong");
                } catch (error) {
                    // console.log("error", error)
                    throw error;
                }
            }

            // async authorize(credentials) {
            //     try {
            //         const user = await login(credentials);
            //         console.log("authorise User", user)
            //         return user;
            //     } catch (err) {

            //         console.log("error null")
            //         return null;
            //     }
            // },
        })
    ],
    callbacks: {
        // разрешение для остальных пользователей заходить с помощью кнопки Login with ... (в данном случае Google)
        async signIn({ user, account, profile }) {
            // console.log("user", user, "account", account, "profile", profile);
            if (account.provider === 'google') {
                await connectToDB();
                try {
                    // ищет пользователя по email
                    const user = await User.findOne({ email: profile.email });
                    // если есть пользователь - login success
                    if (user) {
                        return true;
                    }
                    return false;

                } catch (error) {
                    // console.log(error);
                    return false;
                }
            }
        }
    },
    pages: {
        error: '/dashboard',
    }
})


export { handler as GET, handler as POST }