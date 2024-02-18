import { Coworker } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { slug } = params;

    try {
        connectToDB();

        const data = await Coworker.findOne({ slug });
        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}

export const DELETE = async (request, { params }) => {
    const { slug } = params;

    try {
        await connect();

        await Coworker.deleteOne({ slug });

        return new NextResponse("Coworker has been deleted.", { status: 200 })

    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}


export const PUT = async (request, { params }) => {
    const { slug } = params;
    const incomingData = await request.json();

    try {
        await connect();

        const updatedCoworker = await Coworker.findOneAndUpdate({ slug }, incomingData);

        if (!updatedCoworker) {
            return new NextResponse("Coworker not found", { status: 404 });
        }

        return new NextResponse("Coworker has been updated", { status: 200 });

    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};


export const PATCH = async (request, { params }) => {
    const { slug } = params;
    const incomingData = await request.json();

    try {
        await connect();

        const updatedCoworker = await Coworker.findOneAndUpdate({ slug }, incomingData);

        if (!updatedCoworker) {
            return new NextResponse("Coworker not found", { status: 404 });
        }
        return new NextResponse("Coworker has been updated", { status: 200 });

    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};