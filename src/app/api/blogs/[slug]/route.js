import { Blog } from "@/lib/models";
import { connectToDB } from "@/utils/connectToDB";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { slug } = params;

    try {
        await connectToDB();

        const data = await Blog.findOne({ slug });
        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}

export const DELETE = async (request, { params }) => {
    const { slug } = params;

    try {
        await connectToDB();

        await Blog.deleteOne({ slug });

        return new NextResponse("Blog has been deleted.", { status: 200 })

    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}


export const PUT = async (request, { params }) => {
    const { slug } = params;
    const incomingData = await request.json();

    try {
        await connectToDB();

        const updatedBlog = await Blog.findOneAndUpdate({ slug }, incomingData);

        if (!updatedBlog) {
            return new NextResponse("Blog not found", { status: 404 });
        }

        return new NextResponse("Blog has been updated", { status: 200 });

    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};


export const PATCH = async (request, { params }) => {
    const { slug } = params;
    const incomingData = await request.json();

    try {
        await connectToDB();

        const updatedBlog = await Blog.findOneAndUpdate({ slug }, incomingData);

        if (!updatedBlog) {
            return new NextResponse("Blog not found", { status: 404 });
        }
        return new NextResponse("Blog has been updated", { status: 200 });

    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};