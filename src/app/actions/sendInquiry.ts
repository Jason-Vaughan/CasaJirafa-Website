"use server";

import { Resend } from "resend";

export async function sendInquiryAction(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const checkin = formData.get("checkin") as string;
    const checkout = formData.get("checkout") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !checkin || !checkout) {
      return { success: false, error: "Missing required fields" };
    }

    const hostEmail = resend.emails.send({
      from: "Casa Jirafa Inquiries <inquiries@casajirafapv.com>", 
      to: ["jason@visualworksav.com"], 
      cc: ["rosie19.rd@gmail.com"],
      replyTo: email,
      subject: `New Booking Inquiry from ${name} (${checkin} to ${checkout})`,
      text: `
Name: ${name}
Email: ${email}
Check-in: ${checkin}
Check-out: ${checkout}
Message: ${message}
      `,
    });

    const guestEmail = resend.emails.send({
      from: "Casa Jirafa <inquiries@casajirafapv.com>",
      to: [email],
      subject: "We received your booking inquiry!",
      text: `
Hi ${name.split(" ")[0]},

Thank you for your interest in Casa Jirafa! We have received your booking inquiry for the dates:
Check-in: ${checkin}
Check-out: ${checkout}

We are reviewing our availability and will get back to you shortly with next steps and pricing. 

For your records, here is a copy of your message:
"${message}"

Warm regards,
Jason & Rosie
Casa Jirafa
      `
    });

    const [hostResponse, guestResponse] = await Promise.all([hostEmail, guestEmail]);

    if (hostResponse.error || guestResponse.error) {
      console.error("Resend error:", hostResponse.error || guestResponse.error);
      return { success: false, error: (hostResponse.error || guestResponse.error)?.message };
    }

    return { success: true, data: hostResponse.data };
  } catch (error) {
    console.error("Failed to send inquiry:", error);
    return { success: false, error: "Failed to send inquiry" };
  }
}
