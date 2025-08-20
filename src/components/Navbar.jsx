"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	RiMenuLine,
	RiCloseLine,
	RiHome5Line,
	RiInformationLine,
	RiToolsLine,
	RiMailLine,
	RiFileListLine,
} from "react-icons/ri";
import ThemeSwitcher from "./Navbar/ThemeSwitcher";
import localFont from "next/font/local";

const NAV = [
	{ href: "/", label: "Home", Icon: RiHome5Line },
	{ href: "/about", label: "About", Icon: RiInformationLine },
	{ href: "/services", label: "Services", Icon: RiToolsLine },
	{ href: "/contact", label: "Contact", Icon: RiMailLine },
	{ href: "/legal/terms", label: "Terms", Icon: RiFileListLine },
];

const MozillaHeadlineFonts = localFont({
	src: "../../public/fonts/MozillaHeadline/MozillaHeadline.ttf",
});

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const isActive = (href) =>
		href === "/" ? pathname === "/" : pathname?.startsWith(href);

	return (
		<header className="sticky top-0 z-50">
			<div className="bg-primary text-primary-foreground border-b border-primary-foreground/15">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex items-center justify-between h-14">
						{/* Logo (ensure .logo-font & .logo-gradient are in app/globals.css) */}
						<Link
							href="/"
							className="flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
							aria-label="Aeon — Home"
						>
							<span
								className={`text-4xl ${MozillaHeadlineFonts.className} tracking-widest uppercase font-semibold `}
							>
								Aeon
							</span>
						</Link>

						{/* Desktop nav */}
						<nav className="hidden md:flex items-center gap-2 nav-font">
							{NAV.map(({ href, label, Icon }) => {
								const active = isActive(href);
								return (
									<Link
										key={href}
										href={href}
										aria-current={
											active ? "page" : undefined
										}
										className={`group relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
                                ${
									active
										? "bg-primary-foreground/10"
										: "hover:bg-primary-foreground/10"
								}`}
									>
										<Icon className="w-5 h-5 opacity-90" />
										<span className="opacity-95">
											{label}
										</span>
										<span
											className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 origin-left rounded-full transition-transform
                        ${
							active
								? "bg-accent scale-x-100"
								: "bg-primary-foreground/40 scale-x-0 group-hover:scale-x-100"
						}`}
										/>
									</Link>
								);
							})}
							<div className="ml-2">
								<ThemeSwitcher />
							</div>
						</nav>

						{/* Mobile actions */}
						<div className="md:hidden flex items-center gap-2">
							<ThemeSwitcher />
							<button
								onClick={() => setOpen((v) => !v)}
								aria-expanded={open}
								aria-label="Toggle menu"
								className="p-2 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
							>
								{open ? (
									<RiCloseLine className="w-6 h-6" />
								) : (
									<RiMenuLine className="w-6 h-6" />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{open && (
				<div className="md:hidden bg-background border-b border-border shadow-sm">
					<nav className="max-w-7xl mx-auto px-4 py-2.5 grid gap-1.5 nav-font">
						{NAV.map(({ href, label, Icon }) => {
							const active = isActive(href);
							return (
								<Link
									key={href}
									href={href}
									onClick={() => setOpen(false)}
									aria-current={active ? "page" : undefined}
									className={`flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition
                    hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
                    ${active ? "bg-muted" : ""}`}
								>
									<Icon className="w-5 h-5 opacity-90" />
									<span className="font-medium">{label}</span>
								</Link>
							);
						})}
					</nav>
				</div>
			)}
		</header>
	);
}
