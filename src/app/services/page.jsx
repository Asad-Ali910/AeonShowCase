import TOC from "@/components/services/TOC";
import ChipRail from "@/components/services/ChipRail";

export const metadata = {
	title: "Services — Aeon Development Center",
	description:
		"Functional web apps, custom online tools, internal dashboards, performance optimization, responsive refactors, and design systems.",
};

const sections = [
	{
		id: "functional-web-apps",
		title: "Functional Web Apps",
		what: "Next.js apps with clean architecture. Backend APIs when needed.",
		bestFor: "SaaS, dashboards, custom tools.",
		deliverables: [
			"UX skeleton & components",
			"API + auth/roles",
			"Deploy + CI/CD",
			"Docs & handover",
		],
		timeline: "4–6 weeks (deep builds 6–10)",
	},
	{
		id: "custom-online-tools",
		title: "Custom Online Tools / SaaS",
		what: "A tool people can log into and use (or pay for later).",
		bestFor: "Founders testing a product idea.",
		deliverables: [
			"Multi-user auth",
			"Roles & data model",
			"Core feature v1",
			"Deploy, handover",
		],
		timeline: "4–6 weeks for an MVP",
	},
	{
		id: "admin-dashboards",
		title: "Admin Dashboards & Internal Tools",
		what: "Role-based dashboards for inventory, approvals, KPIs.",
		bestFor: "Teams who need speed + accuracy, not slides.",
		deliverables: [
			"Secure login",
			"Tables/filters",
			"Exports",
			"Audit trail",
		],
		timeline: "2–4 weeks",
	},
	{
		id: "performance-optimization",
		title: "Performance Optimization & Core Web Vitals",
		what: "Make your site/app fast and clean.",
		bestFor: "Sites with slow loads or poor Lighthouse scores.",
		deliverables: ["Perf audit", "Fixes", "Before/after report"],
		timeline: "3–7 days per sprint",
	},
	{
		id: "responsive-conversions",
		title: "Responsive Conversions & Refactors",
		what: "Turn messy/desktop-only sites into responsive, maintainable code.",
		bestFor: "Legacy codebases or template-heavy sites.",
		deliverables: [
			"Layout overhaul",
			"Componentization",
			"Accessibility pass",
		],
		timeline: "1–3 weeks",
	},
	{
		id: "design-system",
		title: "Design System & Custom Components",
		what: "Tokens, components, and usage rules so changes are fast and consistent.",
		bestFor: "Products that will grow and change.",
		deliverables: [
			"Color/type tokens",
			"10–20 base components",
			"Docs/examples",
		],
		timeline: "1–2 weeks (starter), 3–4 weeks (bigger set)",
	},
];

export default function ServicesPage() {
	return (
		<main className="bg-background text-foreground">
			{/* Hero */}
			<section className="relative overflow-hidden">
				<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
				<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-14">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight">
						Services
					</h1>
					<p className="mt-2 text-foreground/80">
						Engineering-first delivery across web apps, internal
						tools, performance, and systems.
					</p>
					{/* Mobile chip rail */}
					<div className="mt-6 md:hidden">
						<ChipRail sections={sections} />
					</div>
				</div>
			</section>

			<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-16">
				<div className="grid gap-10 md:grid-cols-[220px_1fr]">
					{/* Sticky TOC (desktop) */}
					<aside className="hidden md:block">
						<TOC sections={sections} />
					</aside>

					{/* Sections */}
					<div className="space-y-12">
						{sections.map((s) => (
							<section
								key={s.id}
								id={s.id}
								className="scroll-mt-28 rounded-2xl bg-surface ring-1 ring-border p-6 md:p-8 group transition hover:shadow-md"
							>
								<header className="flex items-start justify-between gap-4">
									<div>
										<h2 className="text-2xl font-semibold">
											{s.title}
										</h2>
										<p className="mt-2 text-foreground/85">
											{s.what}
										</p>
										<p className="mt-1 text-sm text-foreground/70">
											<strong>Best for:</strong>{" "}
											{s.bestFor}
										</p>
									</div>
								</header>

								<div className="mt-6 grid gap-6 sm:grid-cols-2">
									<div>
										<h3 className="text-sm font-semibold">
											Deliverables
										</h3>
										<ul className="mt-2 list-disc pl-5 text-sm text-foreground/85">
											{s.deliverables.map((d) => (
												<li key={d}>{d}</li>
											))}
										</ul>
									</div>
									<div>
										<h3 className="text-sm font-semibold">
											Typical timeline
										</h3>
										<p className="mt-2 text-sm text-foreground/85">
											{s.timeline}
										</p>
										<div className="mt-4 rounded-lg bg-muted px-3 py-2 text-xs text-foreground/70">
											<span className="font-medium">
												Note:
											</span>{" "}
											timelines adjust with scope &
											integrations.
										</div>
									</div>
								</div>
							</section>
						))}
					</div>
				</div>
			</div>

			{/* Glassy CTA band */}
			<section className="py-12">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
					<div className="rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-border p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
						<div>
							<h3 className="text-xl font-semibold">
								Not sure where to start?
							</h3>
							<p className="text-sm text-foreground/80">
								Send a quick note about what you need. I’ll
								reply with a simple plan.
							</p>
						</div>
						<div className="flex gap-3">
							<a
								href="/contact"
								className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-text px-4 py-2.5 text-sm font-medium hover:brightness-110 transition"
							>
								Get a quick plan
							</a>
							<a
								href="/about#process"
								className="inline-flex items-center justify-center rounded-xl ring-1 ring-border px-4 py-2.5 text-sm font-medium hover:bg-muted transition"
							>
								See my process
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
