import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/connectToDB";
import { Blog } from "@/lib/models";


export const GET = async (request) => {
    try {
        await connectToDB();

        const data = await Blog.find();

        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        console.log('error', error)
        return new NextResponse('Database error', { status: 500 })
    }
}


export const POST = async (request) => {
    const body = await request.json();

    const newBlog = new Blog(body);

    try {
        await connectToDB();
        await newBlog.save();

        return new NextResponse('Blog has been created.', { status: 201 });
    } catch (err) {
        return new NextResponse(err, { status: 500 });
    }
};