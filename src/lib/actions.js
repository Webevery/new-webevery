import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcryptjs";


export const handleGoogleLogin = async (e) => {
    "use server"
    await signIn('google');
}


export const handleLogout = async (e) => {
    "use server"
    await signOut();
}


export const register = async (formData) => {
    "use server"
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
        console.log('saved to DB');
    } catch (error) {
        console.log("error", error);
        return { error: "Something went wrong" }
    }
}

// используется в loginForm. вызывается signIn из auth.js (передавая credentials). там выполняется алгоритм в части CredentialsProvider
export const login = async (formData) => {
    "use server"
    const { email, password } = Object.fromEntries(formData);
    try {
        await signIn("credentials", { email, password })

    } catch (error) {
        console.log("error", error);
        return { error: "Something went wrong" }
    }
}