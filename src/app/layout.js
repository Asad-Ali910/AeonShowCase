// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.tsx";
import ContextProvider from "../context/ContextProvider.jsx";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Aeon - Home",
	description: "Aeon Dev Center HomPage",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-theme="light" // ← match SSR
			style={{ colorScheme: "light" }} // ← match SSR
			suppressHydrationWarning // ← avoids noisy warnings if something still differs
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ContextProvider>
					<Navbar />
					{children}
				</ContextProvider>
			</body>
		</html>
	);
}
