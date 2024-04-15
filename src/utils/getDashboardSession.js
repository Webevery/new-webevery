"use server"
import { auth } from "@/lib/auth";


export const getDashboardSession = async () => {
    const session = await auth();
    return session;
}