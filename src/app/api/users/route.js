import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/connectToDB";
import { User } from "@/lib/models";


export const GET = async (request) => {
    try {
        await connectToDB();

        const data = await User.find();

        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new NextResponse('Database error', { status: 500 })
    }
}