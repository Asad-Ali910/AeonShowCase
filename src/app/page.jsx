"use client";
import Link from "next/link";
import HeroMock from "@/components/home/HeroMock";

export default function Hero() {
	return (
		<section className="relative overflow-hidden antialiased">
			{/* subtle gradient glow (now behind content) */}
			<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />

			<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-16 md:py-24">
				<div className="grid items-center gap-10 md:grid-cols-2">
					{/* LEFT: copy */}
					<div>
						<span className="inline-block rounded-full bg-background/60 backdrop-blur-sm ring-1 ring-border/60 px-3 py-1 text-xs text-foreground/80">
							Engineering-first studio
						</span>

						<h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground subpixel-antialiased">
							Build, ship, and scale your software—on time
						</h1>

						<p className="mt-4 text-foreground/90">
							Aeon Development Center delivers modern web apps,
							robust backend APIs, and performance-focused UIs.
							Weekly demos. Clean handover. Real results.
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-3">
							<Link
								href="/services"
								className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-text px-4 py-2.5 text-sm font-medium hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
							>
								Start a project
							</Link>
							<Link
								href="/services"
								className="inline-flex items-center justify-center rounded-xl ring-1 ring-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
							>
								See services
							</Link>
						</div>

						<div className="mt-6 text-xs text-foreground/60">
							Trusted by founders · Weekly demos · Core Web Vitals
							95+
						</div>
					</div>

					{/* RIGHT: lightweight visual */}
					<div className="relative">
						<div className="rounded-2xl bg-background/30 backdrop-blur-sm ring-1 ring-border p-3 md:p-4 shadow-sm">
							<div className="aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-border/60">
								<HeroMock />
							</div>
							<div className="mt-3 grid grid-cols-3 gap-2 text-xs">
								<Stat label="MVPs shipped" value="10+" />
								<Stat
									label="Time to first demo"
									value="7–10d"
								/>
								<Stat label="Lighthouse (perf)" value="95+" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function Stat({ label, value }) {
	return (
		<div className="rounded-lg bg-surface ring-1 ring-border px-3 py-2 text-foreground/80">
			<div className="text-[10px]">{label}</div>
			<div className="text-sm font-semibold text-foreground">{value}</div>
		</div>
	);
}
