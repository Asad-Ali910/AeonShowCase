// components/home/ServicesRail.tsx
import Link from "next/link";

const items = [
	{ id: "functional-web-apps", title: "Functional Web Apps" },
	{ id: "landing-pages", title: "Landing Pages" },
	{ id: "backend-apis", title: "Backend APIs" },
	{ id: "performance-optimization", title: "Performance Optimization" },
	{ id: "portfolio-sites", title: "Portfolio Sites" },
	{ id: "database-setup", title: "Database Setup" },
	{ id: "responsive-conversions", title: "Responsive Conversions" },
	{ id: "custom-components", title: "Custom Components" },
	{ id: "admin-dashboards", title: "Admin Dashboards" },
	{ id: "authentication-and-roles", title: "Authentication & Roles" },
	{ id: "payments-and-subscriptions", title: "Payments & Subscriptions" },
	{ id: "real-time-features", title: "Real-time Features" },
	{ id: "headless-cms", title: "Headless CMS" },
	{ id: "testing-and-quality", title: "Testing & Quality" },
	{ id: "devops-and-ci-cd", title: "DevOps & CI/CD" },
	{ id: "documentation-and-handover", title: "Documentation & Handover" },
	{ id: "maintenance-and-support", title: "Maintenance & Support" },
];

export default function ServicesRail() {
	return (
		<section className="py-10">
			<div className="mx-auto max-w-7xl px-4">
				<h2 className="mb-4 text-xl font-semibold text-foreground">
					Services
				</h2>

				<div className="relative">
					{/* fade edges */}
					<div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-background to-transparent" />
					<div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-background to-transparent" />

					<div
						className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory
                       [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
						aria-label="Service shortcuts"
					>
						{items.map(({ id, title }) => (
							<Link
								key={id}
								href={`/services#${id}`}
								className="shrink-0 snap-start"
							>
								<span
									className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm
                                   ring-1 ring-border px-3 py-2 text-sm text-foreground
                                   hover:bg-white/20 transition"
								>
									{title}
								</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
