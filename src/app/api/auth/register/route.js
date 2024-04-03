import { User } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export const POST = async (request) => {
    const { name, email, password, isAdmin } = await request.json();

    // подключается к БД
    await connectToDB();

    const user = await User.findOne({ email });
    if (user) {
        return new NextResponse("User already exists", {
            status: 401,
        })
    }

    // шифрует пароль
    const hashedPassword = await bcrypt.hash(password, 5);

    // создает нового пользователя с зашифрованным паролем
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        isAdmin
    });


    try {
        // сохраняет нового пользователя в БД
        await newUser.save();

        return new NextResponse("User has been created", {
            status: 201,
        })

    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        })
    }
}