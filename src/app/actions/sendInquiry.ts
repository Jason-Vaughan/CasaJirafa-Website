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

    const { data, error } = await resend.emails.send({
      from: "Casa Jirafa Inquiries <onboarding@resend.dev>", // Update this to verified sender domain when ready
      to: ["jason@visualworksav.com"], // Update this back to hello@casajirafa.com once you verify a domain
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

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Failed to send inquiry:", error);
    return { success: false, error: "Failed to send inquiry" };
  }
}
