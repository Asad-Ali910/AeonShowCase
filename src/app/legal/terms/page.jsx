export const metadata = {
	title: "Terms — Aeon Development Center",
	description: "Ethics & lawful use, confidentiality, and project terms.",
};

export default function TermsPage() {
	return (
		<main className="bg-background text-foreground">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-12">
				<header className="mb-6">
					<h1 className="text-3xl font-bold">Terms</h1>
					<p className="mt-2 text-sm text-foreground/70">
						Last updated: {new Date().toISOString().slice(0, 10)}
					</p>
				</header>

				<section className="rounded-2xl bg-surface ring-1 ring-border p-6 md:p-8">
					<h2 className="text-xl font-semibold">
						Ethics & Lawful Use
					</h2>
					<ol className="mt-4 list-decimal pl-5 space-y-3 text-foreground/85">
						<li>
							<strong>Client representations.</strong> Client
							represents the project and all provided materials
							comply with applicable laws and do not infringe the
							rights of others.
						</li>
						<li>
							<strong>Right to decline/terminate.</strong>{" "}
							Developer may decline or terminate work, with
							notice, if the project involves unlawful, deceptive,
							harmful, or privacy-violating activity, or requests
							to bypass security/DRM.
						</li>
						<li>
							<strong>On termination for ethics.</strong>{" "}
							Developer will (i) keep all Client information
							confidential; (ii) deliver available
							work-in-progress and reasonable handover notes; and
							(iii) invoice pro-rata for work performed to date
							(unused prepayments refunded pro-rata).
						</li>
						<li>
							<strong>Continuing duties.</strong> Both parties
							remain bound by confidentiality and data-protection
							obligations after termination.
						</li>
					</ol>

					<h2 className="mt-8 text-xl font-semibold">
						Confidentiality (NDA)
					</h2>
					<p className="mt-3 text-foreground/80">
						Either party may request a mutual NDA before sharing
						credentials, datasets, or private specs. Confidential
						information is used only to evaluate or deliver the
						project and must be protected with reasonable care.
					</p>

					<h2 className="mt-8 text-xl font-semibold">
						Ownership & Support
					</h2>
					<ul className="mt-3 space-y-2 text-foreground/80">
						<li>• Client owns the code after full payment.</li>
						<li>
							• Bug-fix guarantee: free fixes for issues caused by
							my code for <strong>90 days</strong> after launch.
						</li>
						<li>
							• New features or changes outside scope are quoted
							separately.
						</li>
					</ul>
				</section>
			</div>
		</main>
	);
}
