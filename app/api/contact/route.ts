import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(request: NextRequest) {
    try {
        // Get form data from request
        const { name, email, message } = await request.json();

        // Validate all fields are filled
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Please fill in all fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            );
        }

        // Email to YOU (the portfolio owner)
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `🔥 New Contact Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #6c47ff, #ff4d8c); padding: 20px; text-align: center;">
                        <h2 style="color: white; margin: 0;">✨ New Portfolio Message ✨</h2>
                    </div>
                    <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px;">
                        <div style="margin-bottom: 20px;">
                            <strong style="color: #6c47ff;">👤 Name:</strong>
                            <p style="margin: 5px 0 0 0; color: #333;">${name}</p>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <strong style="color: #6c47ff;">📧 Email:</strong>
                            <p style="margin: 5px 0 0 0; color: #333;">${email}</p>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <strong style="color: #6c47ff;">💬 Message:</strong>
                            <p style="margin: 5px 0 0 0; color: #333; background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #6c47ff;">
                                ${message}
                            </p>
                        </div>
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
                        <p style="color: #999; font-size: 12px; text-align: center;">
                            Sent from your Portfolio Website Contact Form
                        </p>
                    </div>
                </div>
            `,
        });

        // Auto-reply email to the person who contacted you
        await transporter.sendMail({
            from: `"Asnan Ali" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Thank you for contacting me! 🙏",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #6c47ff, #ff4d8c); padding: 20px; text-align: center;">
                        <h2 style="color: white; margin: 0;">Thank You for Reaching Out! 🚀</h2>
                    </div>
                    <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px;">
                        <p>Dear <strong>${name}</strong>,</p>
                        <p>Thank you for contacting me! I have received your message and will get back to you within <strong>24-48 hours</strong>.</p>
                        <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6c47ff;">
                            <p style="margin: 0; color: #666;"><strong>Your message:</strong></p>
                            <p style="margin: 10px 0 0 0; color: #333;">${message}</p>
                        </div>
                        <p>Best regards,<br/>
                        <strong style="color: #6c47ff;">Asnan Ali</strong><br/>
                        Full-Stack Developer</p>
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
                        <p style="color: #999; font-size: 12px; text-align: center;">
                            This is an automated confirmation. I'll respond personally soon!
                        </p>
                    </div>
                </div>
            `,
        });

        // Return success response
        return NextResponse.json(
            { 
                success: true, 
                message: 'Your message has been sent successfully! I will get back to you soon.' 
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}