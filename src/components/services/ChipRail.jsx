"use client";

export default function ChipRail({ sections }) {
	return (
		<div className="relative">
			{/* fade edges */}
			<div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-background to-transparent" />
			<div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-background to-transparent" />
			<div
				className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory
                   [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
				aria-label="Service shortcuts"
			>
				{sections.map((s) => (
					<a
						key={s.id}
						href={`#${s.id}`}
						className="shrink-0 snap-start"
					>
						<span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-border px-3 py-1.5 text-xs text-foreground hover:bg-white/20 transition">
							{s.title}
						</span>
					</a>
				))}
			</div>
		</div>
	);
}
