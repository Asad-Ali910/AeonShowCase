// app/about/page.tsx
import EthicalPolicy from "@/components/about/EthicalPolicy";

export const metadata = {
	title: "About — Aeon Development Center",
	description:
		"Aeon Development Center builds high-performance web apps, internal tools, and SaaS with privacy-first engineering and clean delivery.",
};



export default function AboutPage() {
	return (
		<main className="bg-background text-foreground">
			{/* Intro Hero */}
			<section className="relative overflow-hidden">
				<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
				<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-16 md:py-24">
					<div className="max-w-3xl">
						<span className="inline-block rounded-full bg-background/60 backdrop-blur-sm ring-1 ring-border/60 px-3 py-1 text-xs text-foreground/80">
							About Aeon Development Center
						</span>
						<h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
							Engineering that ships. Privacy that holds. Results
							that last.
						</h1>
						<p className="mt-4 text-foreground/85">
							I build modern web apps, internal dashboards, and
							custom tools that feel fast, stay simple, and
							respect your data. Remote-first, outcome-driven, and
							hands-on from scope to launch.
						</p>
					</div>
				</div>
			</section>

			{/* Mission */}
			<Section title="Mission">
				<p>
					Aeon Development Center helps people and teams expand their
					online presence and streamline their work by delivering
					high-performance web apps and tools. I use Next.js on the
					front, Rust-backed APIs when speed truly matters, and
					personalized, optimized data flows so everything stays
					simple, fast, and reliable.
				</p>
			</Section>

			{/* What I build */}
			<Section title="What I build">
				<ul className="grid gap-3 sm:grid-cols-2">
					<Li> SaaS tools you can sell to customers </Li>
					<Li>
						{" "}
						Internal ops dashboards (inventory, approvals, KPIs){" "}
					</Li>
					<Li>
						{" "}
						Custom websites of any type (when requirements are
						clear){" "}
					</Li>
				</ul>
			</Section>

			{/* Signature services */}
			<Section
				title="Signature services"
				subtitle="Focused, practical, and built for real use."
			>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<Card title="Functional Web Apps">
						Next.js, TypeScript, clean architecture.
					</Card>
					<Card title="Rust-backed APIs (when needed)">
						Speed where it counts, simple everywhere else.
					</Card>
					<Card title="Custom Online Tools / SaaS">
						From idea to deploy with CI/CD and docs.
					</Card>
					<Card title="Admin Dashboards & Internal Tools">
						Role-based access, reporting, clear UX.
					</Card>
					<Card title="Performance & Core Web Vitals">
						Smart caching, fast fetches, measurable gains.
					</Card>
					<Card title="Responsive Refactors & Design Systems">
						Reusable components, consistent UI, fewer bugs.
					</Card>
				</div>
			</Section>

			{/* Differentiators */}
			<Section title="What makes Aeon different">
				<ul className="space-y-2">
					<Li>
						{" "}
						Design systems + clean components → faster changes and
						fewer bugs{" "}
					</Li>
					<Li>
						{" "}
						Performance-first engineering with smart caching and
						optimized fetches{" "}
					</Li>
					<Li>
						{" "}
						Privacy-first internal tools: on-prem or locked cloud;
						your data stays yours{" "}
					</Li>
					<Li>
						{" "}
						Hands-on founder delivery with direct communication and
						clear trade-offs{" "}
					</Li>
					<Li>
						{" "}
						Clean handover: repo access, CI/CD, concise docs, final
						Loom walkthrough{" "}
					</Li>
				</ul>
			</Section>

			{/* Founder story */}
			<Section title="Founder story">
				<p>
					I started Aeon to build software that feels bigger, faster,
					and more useful than the usual. I’m a self-taught engineer
					who shipped a device-inventory SaaS that turned a sluggish,
					lazy-loading experience into an instant, click-responsive
					app. I also architected a role-based, multi-tenant platform
					businesses can run privately with strong security controls.
					When speed matters, I pair Next.js with Rust APIs and design
					with reusable components so products remain professional and
					error-free.
				</p>
			</Section>

			{/* Product spotlight: Sharp System */}
			<Section
				title="Product spotlight: Sharp System"
				subtitle="Free, fast, and privacy-first."
			>
				<Card>
					<p>
						<strong>Sharp System</strong> is my free, role-based
						platform for device and IMEI management. It generates
						invoices, supports multiple roles and access levels, and
						keeps data private by design. The goal is simple: fast,
						simple, secure.
					</p>
				</Card>
			</Section>

			{/* Process */}
			<Section title="Process">
				<ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 list-decimal pl-5">
					<Li as="li">
						<strong>Scope</strong> — short discovery to map goals
						and constraints.
					</Li>
					<Li as="li">
						<strong>Design</strong> — lightweight system and
						components for consistency.
					</Li>
					<Li as="li">
						<strong>Build</strong> — iterative implementation with
						recorded Loom updates.
					</Li>
					<Li as="li">
						<strong>Launch</strong> — deploy, docs, and handover.
					</Li>
				</ol>
			</Section>

			{/* Timelines */}
			<Section title="Timelines">
				<ul className="space-y-2">
					<Li>
						<strong>Quick ship:</strong> 10–15 days for a focused
						company site.
					</Li>
					<Li>
						<strong>Standard build:</strong> ~4–6 weeks for most web
						apps or dashboards.
					</Li>
					<Li>
						<strong>Deep engagement:</strong> ~6–10 weeks when we
						iterate until you’re satisfied or the scope is complex.
					</Li>
				</ul>
			</Section>

			{/* Tech stack */}
			<Section title="Tech stack">
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<Card title="Frontend">
						Next.js, React, TypeScript, Tailwind.
					</Card>
					<Card title="APIs">
						Node (TypeScript), Rust for high-performance endpoints.
					</Card>
					<Card title="Databases">
						SQL & NoSQL — Postgres/MySQL, MongoDB/Firestore.
					</Card>
					<Card title="Caching & speed">
						Redis, CDN/HTTP caching, smart fetch strategies.
					</Card>
					<Card title="Auth & roles">
						NextAuth or custom JWT, least-privilege by default.
					</Card>
					<Card title="Infra & deploy">
						Vercel by default; AWS + Docker when needed.
					</Card>
				</div>
				<p className="mt-3 text-sm text-foreground/75">
					Payments: not my default yet. If you need Stripe or similar,
					I’ll research and implement carefully with a discovery
					phase.
				</p>
			</Section>

			{/* Communication & workflow */}
			<Section title="Communication & workflow">
				<ul className="space-y-2">
					<Li>
						<strong>Primary comms:</strong> WhatsApp (email on
						request).
					</Li>
					<Li>
						<strong>Updates:</strong> short recorded Loom videos;
						live calls if you want them.
					</Li>
					<Li>
						<strong>Tracking:</strong> minimal by default; I’ll use
						Notion/Jira/Trello if you prefer.
					</Li>
					<Li>
						<strong>Code & handover:</strong> private repo access,
						concise docs, final Loom walkthrough.
					</Li>
				</ul>
			</Section>

			{/* Maintenance & privacy */}
			<Section title="Maintenance & privacy">
				<ul className="space-y-2">
					<Li>
						<strong>Bug-fix guarantee:</strong> free fixes for
						issues caused by my code for <strong>90 days</strong>{" "}
						after launch.
					</Li>
					<Li>
						<strong>New features & changes:</strong> anything
						outside the original scope is quoted separately.
					</Li>
					<Li>
						<strong>Privacy pledge:</strong> I never share or sell
						client data. No third-party analytics by default.
						On-prem or locked cloud if needed.
					</Li>
					<Li>
						<strong>Code ownership & NDA:</strong> you own the code
						after payment. Mutual NDA available on request.
					</Li>
				</ul>
			</Section>

			{/* CTA */}
			<section className="py-12">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
					<div className="rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-border p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
						<div>
							<h3 className="text-xl font-semibold">
								Ready to build something useful and fast?
							</h3>
							<p className="text-sm text-foreground/80">
								Straightforward scope, clean delivery, privacy
								by default.
							</p>
						</div>
						<div className="flex gap-3">
							<a
								href="/contact"
								className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-text px-4 py-2.5 text-sm font-medium hover:brightness-110 transition"
							>
								Start a project
							</a>
							<a
								href="/services"
								className="inline-flex items-center justify-center rounded-xl ring-1 ring-border px-4 py-2.5 text-sm font-medium hover:bg-muted transition"
							>
								See services
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Ethical policy at the end */}
			<EthicalPolicy />
		</main>
	);
}

/* ---------- Tiny local UI helpers ---------- */
function Section({ title, subtitle, children }) {
	return (
		<section className="py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
				<header className="mb-6">
					<h2 className="text-2xl md:text-3xl font-semibold">
						{title}
					</h2>
					{subtitle ? (
						<p className="mt-2 text-foreground/80">{subtitle}</p>
					) : null}
				</header>
				<div className="prose prose-invert max-w-none">{children}</div>
			</div>
		</section>
	);
}

function Card({ title, children }) {
	return (
		<div className="rounded-2xl bg-surface ring-1 ring-border p-5 hover:shadow-md transition">
			{title ? (
				<h3 className="text-base font-semibold">{title}</h3>
			) : null}
			<div
				className={
					title
						? "mt-2 text-sm text-foreground/85"
						: "text-sm text-foreground/85"
				}
			>
				{children}
			</div>
		</div>
	);
}

function Li({ children, as: Tag = "li" }) {
	return <Tag className="text-foreground/85">{children}</Tag>;
}
