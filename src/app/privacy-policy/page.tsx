import Breadcrumbs from "@/components/Breadcrumbs";
import MarkdownLayout from "@/components/Markdown";
import { parseMarkdown } from "@/components/Markdown/parseMarkdown";
import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";

export const metadata: Metadata = {
	title: "Política de privacidad",
	description:
		"Aprende como manejamos la información sensible y privada",
};

export default async function PrivacyPage() {
	const raw = fs.readFileSync(
		path.join(process.cwd(), "src/app/privacy-policy/privacy.md"),
		"utf-8",
	);
	const body = raw.replace(/^#[^\n]+\n+\*\*[^\n]+\n+/, "");
	const html = String(await parseMarkdown(body));

	return (
		<main className="px-4 pb-8 pt-8 md:px-6 md:pt-12">
			<div className="mx-auto max-w-375">
				<Breadcrumbs items={[{ label: "Política de privacidad" }]} />
				<MarkdownLayout
					htmlContent={html}
					rawContent={body}
					title="Política de privacidad"
					lastUpdated="27 de septiembre de 2026"
				/>
			</div>
		</main>
	);
}
