"use server";

import { Resend } from "resend";
import { subjectForContact } from "@/components/mail/email-template";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendMail(form: FormData) {
	const name = form.get("name")?.toString() || "Unknown";
	const email = form.get("email")?.toString() || "unknown@example.com";
	const company = form.get("company")?.toString();
	const projectType = form.get("type")?.toString() || "";
	const budget = form.get("budget")?.toString();
	const submittedAt = new Date().toLocaleString();
	const address = process.env.NODE_MAIL;

	const html = `
		<div style="font-family: Arial, sans-serif; font-size:14px; color:#333; background:#f9f9f9; padding:20px; border-radius:8px;">
			<h2 style="font-size:18px; color:#111; border-bottom:1px solid #ddd; padding-bottom:8px;">
				📩 New Contact Request
			</h2>
			<p><b>Name:</b> ${name}</p>
			<p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
			${company ? `<p><b>Company:</b> ${company}</p>` : ""}
			<p><b>Project Type:</b> ${projectType}</p>
			${budget ? `<p><b>Budget:</b> ${budget}</p>` : ""}
			<p><b>Submitted At:</b> ${submittedAt}</p>
		</div>
	`;

	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: [address],
		subject: subjectForContact(name),
		html, // ← simple HTML instead of JSX
	});

	return { success: true };
}
