// components/home/HeroMock.tsx
export default function HeroMock() {
	return (
		<svg
			viewBox="0 0 1600 1000"
			role="img"
			aria-labelledby="heroMockTitle"
			className="h-full w-full"
			preserveAspectRatio="xMidYMid meet"
		>
			<title id="heroMockTitle">Product preview mock</title>

			{/* Panel */}
			<rect
				x="0"
				y="0"
				width="1600"
				height="1000"
				rx="24"
				style={{
					fill: "var(--color-surface)",
					stroke: "var(--color-border)",
					strokeWidth: 2,
				}}
			/>

			{/* Top bar */}
			<rect
				x="0"
				y="0"
				width="1600"
				height="72"
				rx="24"
				style={{
					fill: "var(--color-background-subtle)",
					stroke: "var(--color-border)",
					strokeWidth: 1,
				}}
			/>
			{/* Traffic lights */}
			<circle
				cx="36"
				cy="36"
				r="6"
				style={{ fill: "var(--color-accent)" }}
			/>
			<circle
				cx="58"
				cy="36"
				r="6"
				style={{ fill: "var(--color-muted)" }}
			/>
			<circle
				cx="80"
				cy="36"
				r="6"
				style={{ fill: "var(--color-border-muted)" }}
			/>
			{/* Search pill */}
			<rect
				x="1200"
				y="20"
				width="360"
				height="32"
				rx="16"
				style={{
					fill: "var(--color-background)",
					stroke: "var(--color-border)",
					strokeWidth: 1,
				}}
			/>

			{/* Sidebar */}
			<rect
				x="0"
				y="72"
				width="240"
				height="928"
				style={{
					fill: "var(--color-background-subtle)",
					stroke: "var(--color-border)",
					strokeWidth: 1,
				}}
			/>
			{/* Sidebar items */}
			{Array.from({ length: 6 }).map((_, i) => (
				<rect
					key={i}
					x="24"
					y={110 + i * 60}
					width="192"
					height="28"
					rx="8"
					style={{ fill: "var(--color-muted)" }}
				/>
			))}

			{/* KPI cards */}
			{[
				{ x: 280, w: 300 },
				{ x: 600, w: 300 },
				{ x: 920, w: 300 },
			].map((c, i) => (
				<g key={i}>
					<rect
						x={c.x}
						y="112"
						width={c.w}
						height="120"
						rx="16"
						style={{
							fill: "var(--color-background)",
							stroke: "var(--color-border)",
							strokeWidth: 1,
						}}
					/>
					<rect
						x={c.x + 20}
						y="140"
						width={c.w - 40}
						height="16"
						rx="8"
						style={{ fill: "var(--color-muted)" }}
					/>
					<rect
						x={c.x + 20}
						y="168"
						width={(c.w - 40) * 0.6}
						height="12"
						rx="6"
						style={{ fill: "var(--color-border-muted)" }}
					/>
				</g>
			))}

			{/* Chart card */}
			<rect
				x="1240"
				y="112"
				width="320"
				height="300"
				rx="16"
				style={{
					fill: "var(--color-background)",
					stroke: "var(--color-border)",
					strokeWidth: 1,
				}}
			/>
			{/* Chart area fill */}
			<path
				d="M1260 372 L1260 260 L1320 300 L1380 240 L1440 280 L1500 220 L1550 260 L1550 372 Z"
				style={{
					fill: "color-mix(in oklab, var(--color-primary) 22%, transparent)",
				}}
			/>
			{/* Chart stroke */}
			<path
				d="M1260 260 L1320 300 L1380 240 L1440 280 L1500 220 L1550 260"
				style={{
					fill: "none",
					stroke: "var(--color-primary)",
					strokeWidth: 3,
					strokeLinejoin: "round",
				}}
			/>

			{/* Table card */}
			<rect
				x="280"
				y="260"
				width="980"
				height="360"
				rx="16"
				style={{
					fill: "var(--color-background)",
					stroke: "var(--color-border)",
					strokeWidth: 1,
				}}
			/>
			{/* Table header */}
			<rect
				x="300"
				y="280"
				width="940"
				height="36"
				rx="8"
				style={{ fill: "var(--color-background-subtle)" }}
			/>
			{/* Rows */}
			{Array.from({ length: 5 }).map((_, i) => (
				<rect
					key={i}
					x="300"
					y={330 + i * 56}
					width="940"
					height="36"
					rx="8"
					style={{ fill: "var(--color-muted)" }}
				/>
			))}

			{/* Small cards row */}
			{Array.from({ length: 4 }).map((_, i) => (
				<rect
					key={i}
					x={280 + i * 320}
					y="640"
					width="300"
					height="140"
					rx="16"
					style={{
						fill: "var(--color-background)",
						stroke: "var(--color-border)",
						strokeWidth: 1,
					}}
				/>
			))}
		</svg>
	);
}
