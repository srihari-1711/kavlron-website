import { getAllPosts } from "@/lib/posts";
import { SITE_URL, siteContent } from "@/content/site";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();

  const lines: string[] = [
    `# ${siteContent.legal.entityName} | Kalvron AI OS`,
    "",
    `> ${siteContent.meta.home.description}`,
    "",
    `The official website is available at: [${SITE_URL}](${SITE_URL})`,
    "",
    "## Core Pages",
    "",
    `- [Home](${SITE_URL}/): ${siteContent.hero.headline}.`,
    `- [Private AI](${SITE_URL}/private-ai): Private, fine-tuned AI models hosted exclusively for enterprise operations with zero data leaks.`,
    `- [Vs RPA](${SITE_URL}/vs-rpa): Autonomous AI agents vs traditional robotic process automation.`,
    `- [Projects](${SITE_URL}/projects): What Kalvron has actually built — live AI operating systems running for real clients today across agencies, D2C brands, and recruitment.`,
    `- [Insights](${SITE_URL}/insights): Insights, architectural guides, and operational playbooks on AI operating systems.`,
    `- [Partners](${SITE_URL}/partners): Partner with Kalvron to deliver a done-for-you AI OS to your agency clients.`,
    "",
    "## Insights Articles",
    ""
  ];

  for (const post of posts) {
    const desc = post.metaDescription || post.excerpt || "";
    lines.push(`- [${post.title}](${SITE_URL}/insights/${post.slug}): ${desc}`);
  }

  lines.push(
    "",
    "## Optional & Legal Information",
    "",
    `- [Privacy Policy](${SITE_URL}/privacy): Data protection and privacy practices.`,
    `- [Terms of Service](${SITE_URL}/terms): Terms governing use of Kalvron services.`,
    ""
  );

  return new Response(lines.join("\n"), {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

