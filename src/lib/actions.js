"use server"
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import { User } from "./models";
import { connectToDB } from "@/utils/connectToDB";


export const handleLogout = async () => {
    "use server"
    await signOut();
}

export const register = async (previousState, formData) => {
    const { name, email, password } = Object.fromEntries(formData);
    try {
        await connectToDB();
        const user = await User.findOne({ email });
        if (user) {
            return { error: "User already exists" }
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        })
        await newUser.save();
        return { success: true };
    } catch (error) {
        console.log("error", error);
        return { error: "Something went wrong" }
    }
}

// используется в loginForm. вызывается signIn из auth.js (передавая credentials). там выполняется алгоритм в части CredentialsProvider
export const login = async (previousState, formData) => {
    const { email, password } = Object.fromEntries(formData);
    try {
        await signIn("credentials", { email, password })

    } catch (error) {
        console.log("error", error);
        if (error.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        throw error;
    }
}