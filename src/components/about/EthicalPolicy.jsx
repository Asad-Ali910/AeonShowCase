export default function EthicalPolicy() {
	return (
		<section className="py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
				<div className="rounded-2xl bg-surface ring-1 ring-border p-6 md:p-8">
					<h2 className="text-2xl md:text-3xl font-semibold text-foreground">
						Ethical work policy
					</h2>
					<p className="mt-3 text-foreground/80">
						I only build for lawful, honest use. If a project turns
						shady, I stop immediately. Your data stays confidential,
						I hand over what I’ve built, and we part ways
						professionally. No shortcuts, no dark patterns, no
						hacks.
					</p>
					<ul className="mt-6 space-y-2 text-sm text-foreground/80">
						<li className="flex items-start gap-2">
							<span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
							<span>
								Lawful, privacy-respecting projects only.
							</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
							<span>
								Confidentiality is guaranteed—even if work
								stops.
							</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
							<span>
								Clean handover with code and notes if terminated
								for ethics.
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
