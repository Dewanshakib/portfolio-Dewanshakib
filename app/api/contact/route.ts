import { sendEmail } from "@/service/mail";
import { NextRequest, NextResponse } from "next/server";



export async function POST(
    req: NextRequest, res: NextResponse
) {


    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
        return Response.json({ message: "All fields are required!" });
    }

    try {

        // send mail
        await sendEmail(email, name, message)

        return Response.json({ message: "Email send successfully" });
    } catch (error) {
        return Response.json({ message: error instanceof Error ? error.message : "Server error" });
    }
}