"use client";
import { FormEvent, useState } from "react";
import { sendMail } from "./actions";

const ContactPage = () => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<string | null>(null);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		setMessage(null);

		const form = event.currentTarget;
		const formData = new FormData(form);

		const response = await sendMail(formData);
		setLoading(false);

		if (response.success) {
			setMessage("✅ Your message has been sent successfully!");
			form.reset();
		} else {
			setMessage("❌ Failed to send. Please try again later.");
		}
	};

	return (
		<div className="bg-background-subtle place-self-center w-fit p-4 mx-3.5 mt-4 border-2 border-border rounded-2xl">
			<form className="max-w-lg m-auto p-4" onSubmit={handleSubmit}>
				<h1 className="font-bold text-lg text-center m-3.5 sm:text-3xl">
					Contact Form - Please fill The essential fields
				</h1>
				<div className="flex flex-col self-center gap-4">
					<input
						required
						placeholder="Name"
						className="input w-full"
						type="text"
						name="name"
						id="name"
					/>
					<input
						required
						placeholder="Email"
						className="input"
						type="email"
						name="email"
						id="email"
					/>
					<input
						placeholder="Company (Optional)"
						className="input"
						type="text"
						name="company"
						id="company"
					/>
					<input
						placeholder="Project Type"
						required
						className="input"
						type="text"
						name="type"
						id="type"
					/>
					<input
						placeholder="Budget $"
						className="input"
						type="number"
						name="budget"
						id="budget"
						required
					/>
					<button
						className="bg-primary text-lg font-bold cursor-pointer px-4 py-2 w-fit rounded self-end disabled:opacity-50"
						type="submit"
						disabled={loading}
					>
						{loading ? "Sending..." : "Submit"}
					</button>
				</div>
				{message && (
					<p className="mt-4 text-center font-medium text-sm">
						{message}
					</p>
				)}
			</form>
		</div>
	);
};

export default ContactPage;
