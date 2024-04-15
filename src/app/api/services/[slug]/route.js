import { Service } from "@/lib/models";
import { connectToDB } from "@/utils/connectToDB";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { slug } = params;

    try {
        await connectToDB();

        const data = await Service.findOne({ slug });

        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}


export const DELETE = async (request, { params }) => {
    const { slug } = params;

    try {
        await connectToDB();

        await Service.deleteOne({ slug });

        return new NextResponse("Service has been deleted.", { status: 200 })
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}


export const PUT = async (request, { params }) => {
    const { slug } = params;

    const incomingData = await request.json();

    try {
        await connectToDB();

        const updatedService = await Service.findOneAndUpdate({ slug }, incomingData);

        if (!updatedService) {
            return new NextResponse("Service not found", { status: 404 });
        }

        return new NextResponse("Service has been updated", { status: 200 });
    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};


export const PATCH = async (request, { params }) => {
    const { slug } = params;

    const incomingData = await request.json();

    try {
        await connectToDB();

        const updatedService = await Service.findOneAndUpdate({ slug }, incomingData);

        if (!updatedService) {
            return new NextResponse("Service not found", { status: 404 });
        }

        return new NextResponse("Service has been updated", { status: 200 });
    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};