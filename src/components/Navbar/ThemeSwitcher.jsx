"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
	SunIcon,
	MoonIcon,
	ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const OPTIONS = [
	{ value: "system", Icon: ComputerDesktopIcon },
	{ value: "light", Icon: SunIcon },
	{ value: "dark", Icon: MoonIcon },
];

export default function ThemeSwitcher() {
	const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [open, setOpen] = useState(false);

	const rootRef = useRef(null);
	const buttonRef = useRef(null);

	// Avoid hydration mismatch
	useEffect(() => setMounted(true), []);

	// Close on outside click
	useEffect(() => {
		if (!open) return;
		const onClick = (e) => {
			if (!rootRef.current?.contains(e.target)) setOpen(false);
		};
		const onKey = (e) => {
			if (e.key === "Escape") {
				setOpen(false);
				buttonRef.current?.focus();
			}
		};
		document.addEventListener("mousedown", onClick);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onClick);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);

	// Determine current icon
	const CurrentIcon = useMemo(() => {
		if (!mounted) return ComputerDesktopIcon;

		if (theme === "system") {
			return ComputerDesktopIcon; // keep showing system icon
		}

		if (theme === "light") return SunIcon;
		if (theme === "dark") return MoonIcon;

		return ComputerDesktopIcon;
	}, [mounted, theme]);

	if (!mounted) {
		return (
			<div
				className="inline-flex h-8 w-8 bg-white/10 backdrop-blur-sm animate-pulse"
				aria-hidden="true"
			/>
		);
	}

	return (
		<div className="relative" ref={rootRef}>
			<button
				ref={buttonRef}
				type="button"
				className="inline-flex p-2 h-8 w-8 items-center justify-center rounded-sm bg-white/10 backdrop-blur-sm shadow-sm hover:bg-white/20 transition"
				aria-haspopup="menu"
				aria-expanded={open}
				onClick={() => setOpen((prev) => !prev)}
			>
				<CurrentIcon className="h-4 w-4 text-primary-foreground text-3xl" />
			</button>

			{open && (
				<div
					className="absolute  rounded-sm right-0 mt-2 flex gap-1 backdrop-blur-md p-1 shadow-lg"
					role="menu"
				>
					{OPTIONS.map(({ value, Icon }) => (
						<button
							key={value}
							onClick={() => {
								setTheme(value);
								setOpen(false);
							}}
							className={`h-8 w-8 rounded-sm flex items-center justify-center hover:bg-white/20 transition ${
								theme === value ? "ring-2 ring-accent/60" : ""
							}`}
						>
							<Icon className="h-4 w-4 text-text" />
						</button>
					))}
				</div>
			)}
		</div>
	);
}
