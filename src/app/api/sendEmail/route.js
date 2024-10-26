import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
    try {
        const { name, email, subject, messages } = await request.json();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${process.env.NEXT_PUBLIC_NODEMAILER_EMAIL}`,
                pass: `${process.env.NEXT_PUBLIC_NODEMAILER_PASS}`,
            },
        });

        const mailOptions = {
            from: `${process.env.NEXT_PUBLIC_NODEMAILER_EMAIL}`,
            to: `${process.env.NEXT_PUBLIC_NODEMAILER_EMAIL}`,
            subject: `${subject}`,
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
            <h2 style="text-align: center; background-color: #4CAF50; color: white; padding: 10px; border-radius: 5px;">New Contact Form Submission</h2>
            <p style="font-size: 16px; color: #555;">You have received a new message from your portfolio website. Here are the details:</p>
            <hr style="border: none; border-top: 1px solid #ddd;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4CAF50;">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #fff; padding: 15px; border-radius: 5px; border: 1px solid #ddd; color: #333;">
                <p>${messages}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd;">
            <p style="font-size: 14px; color: #777;">This message was sent from your portfolio contact form.</p>
            </div>
        `
        }

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent successfully." }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
    }
}