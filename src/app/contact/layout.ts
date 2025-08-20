// app/contact/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact — Aeon Development Center",
	description:
		"Aeon Development Center builds high-performance web apps, internal tools, and SaaS with privacy-first engineering and clean delivery.",
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
