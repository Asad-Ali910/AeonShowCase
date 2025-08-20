"use client";

import { useEffect, useRef, useState } from "react";

export default function TOC({ sections = [] }) {
	const [active, setActive] = useState(sections[0]?.id ?? null);
	const [copied, setCopied] = useState(null);
	const observerRef = useRef(null);
	const itemRefs = useRef({}); // id -> <a> element
	const [indicator, setIndicator] = useState({
		top: 0,
		height: 0,
		visible: false,
	});

	// Scrollspy
	useEffect(() => {
		if (!sections.length) return;
		const headings = sections
			.map((s) => document.getElementById(s.id))
			.filter(Boolean);
		if (!headings.length || typeof IntersectionObserver === "undefined") {
			setActive(sections[0]?.id ?? null);
			return;
		}
		observerRef.current?.disconnect();
		observerRef.current = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				if (visible[0]) setActive(visible[0].target.id);
			},
			{ rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] }
		);
		headings.forEach((h) => observerRef.current.observe(h));

		if (location.hash) {
			const id = location.hash.slice(1);
			if (sections.some((s) => s.id === id)) setActive(id);
		}
		return () => observerRef.current?.disconnect();
	}, [sections]);

	// Animate indicator to active item
	useEffect(() => {
		const el = itemRefs.current[active];
		if (!el) return;
		const parent = el.offsetParent || el.parentElement;
		if (!parent) return;
		const top = el.offsetTop;
		const height = el.offsetHeight;
		setIndicator({ top, height, visible: true });
	}, [active]);

	// Recompute on resize
	useEffect(() => {
		const onResize = () => {
			const el = itemRefs.current[active];
			if (!el) return;
			setIndicator({
				top: el.offsetTop,
				height: el.offsetHeight,
				visible: true,
			});
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, [active]);

	const onKeyDown = (e) => {
		const idx = sections.findIndex((s) => s.id === active);
		if (e.key === "ArrowDown") {
			e.preventDefault();
			const next = sections[Math.min(idx + 1, sections.length - 1)];
			if (next) itemRefs.current[next.id]?.focus();
			scrollToId(next?.id);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			const prev = sections[Math.max(idx - 1, 0)];
			if (prev) itemRefs.current[prev.id]?.focus();
			scrollToId(prev?.id);
		} else if (e.key === "Home") {
			e.preventDefault();
			const first = sections[0];
			if (first) itemRefs.current[first.id]?.focus();
			scrollToId(first?.id);
		} else if (e.key === "End") {
			e.preventDefault();
			const last = sections[sections.length - 1];
			if (last) itemRefs.current[last.id]?.focus();
			scrollToId(last?.id);
		} else if (e.key === "Enter") {
			e.preventDefault();
			scrollToId(active);
		}
	};

	const scrollToId = (id) => {
		if (!id) return;
		const target = document.getElementById(id);
		if (!target) return;
		target.scrollIntoView({ behavior: "smooth", block: "start" });
		history.replaceState(null, "", `#${id}`);
		setActive(id);
	};

	const copyLink = async (id) => {
		try {
			const url = `${location.origin}${location.pathname}#${id}`;
			await navigator.clipboard?.writeText(url);
			setCopied(id);
			setTimeout(() => setCopied(null), 1200);
		} catch {}
	};

	return (
		<nav
			aria-label="On this page"
			className="sticky top-24 rounded-2xl bg-surface/95 backdrop-blur-sm ring-1 ring-border p-3"
			onKeyDown={onKeyDown}
		>
			<div className="px-2 pb-2 text-xs font-semibold text-foreground/60">
				On this page
			</div>

			<div className="relative">
				{/* animated active rail */}
				<span
					aria-hidden="true"
					className="pointer-events-none absolute left-1 top-0 w-1 rounded-full bg-accent/60 transition-all duration-300 ease-out"
					style={{
						transform: `translateY(${indicator.top}px)`,
						height: indicator.height,
						opacity: indicator.visible ? 1 : 0,
					}}
				/>
				<ul className="relative space-y-1">
					{sections.map((s) => {
						const isActive = active === s.id;
						return (
							<li key={s.id} className="group relative">
								<a
									ref={(el) => (itemRefs.current[s.id] = el)}
									href={`#${s.id}`}
									aria-current={
										isActive ? "location" : undefined
									}
									onClick={(e) => {
										e.preventDefault();
										scrollToId(s.id);
									}}
									className={`flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition outline-none
                    ${
						isActive
							? "bg-accent/20 text-foreground ring-1 ring-accent/40"
							: "hover:bg-muted text-foreground/80"
					}`}
								>
									<span className="truncate">{s.title}</span>
									{/* copy-link button */}
									<button
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();
											copyLink(s.id);
										}}
										className="ml-auto opacity-0 group-hover:opacity-100 inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] ring-1 ring-border hover:bg-muted transition"
										aria-label={`Copy link to ${s.title}`}
										title="Copy link"
									>
										🔗
									</button>
								</a>
								{copied === s.id && (
									<span className="absolute right-2 top-1.5 text-[10px] text-foreground/60">
										Copied
									</span>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}
