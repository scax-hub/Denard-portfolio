import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: 'denardmarasha5@gmail.com', // Your email
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: 'Error sending email', error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
