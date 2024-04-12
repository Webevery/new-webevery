import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/connectToDB";
import { Service } from "@/lib/models";


export const GET = async (request) => {
    try {
        await connectToDB();

        const data = await Service.find();

        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        console.log('error', error)
        return new NextResponse('Database error', { status: 500 })
    }
}


export const POST = async (request) => {
    const body = await request.json();

    const newService = new Service(body);

    try {
        await connectToDB();
        await newService.save();

        return new NextResponse('Service has been created.', { status: 201 });
    } catch (err) {
        return new NextResponse(err, { status: 500 });
    }
};