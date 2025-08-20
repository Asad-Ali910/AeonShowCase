import * as React from "react";

export const subjectForContact = (name) => `New Contact Request from ${name}`;

const ContactEmail = ({
	name,
	email,
	company,
	projectType,
	budget,
	submittedAt,
}) => (
	<div
		style={{
			fontFamily: "Arial, sans-serif",
			fontSize: "14px",
			color: "#333",
			backgroundColor: "#f9f9f9",
			padding: "20px",
			borderRadius: "8px",
			lineHeight: "1.6",
		}}
	>
		<h2
			style={{
				fontSize: "18px",
				marginBottom: "16px",
				color: "#111",
				borderBottom: "1px solid #ddd",
				paddingBottom: "8px",
			}}
		>
			📩 New Contact Request
		</h2>

		<table
			style={{
				width: "100%",
				borderCollapse: "collapse",
			}}
		>
			<tbody>
				<tr>
					<td
						style={{
							fontWeight: "bold",
							padding: "6px 0",
							width: "150px",
						}}
					>
						Name:
					</td>
					<td>{name}</td>
				</tr>
				<tr>
					<td style={{ fontWeight: "bold", padding: "6px 0" }}>
						Email:
					</td>
					<td>
						<a
							href={`mailto:${email}`}
							style={{ color: "#0077cc" }}
						>
							{email}
						</a>
					</td>
				</tr>
				{company && (
					<tr>
						<td style={{ fontWeight: "bold", padding: "6px 0" }}>
							Company:
						</td>
						<td>{company}</td>
					</tr>
				)}
				<tr>
					<td style={{ fontWeight: "bold", padding: "6px 0" }}>
						Project Type:
					</td>
					<td>{projectType}</td>
				</tr>
				{budget && (
					<tr>
						<td style={{ fontWeight: "bold", padding: "6px 0" }}>
							Budget:
						</td>
						<td>{budget}</td>
					</tr>
				)}
				<tr>
					<td style={{ fontWeight: "bold", padding: "6px 0" }}>
						Submitted At:
					</td>
					<td>{submittedAt}</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export default ContactEmail;
