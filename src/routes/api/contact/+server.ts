import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function POST({ request }) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: env.EMAIL_USER,
    to: env.EMAIL_TO,
    replyTo: email,
    subject: `Message from ${name}`,
    text: message
  });

  return json({ success: true });
}