import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/content/site";

export const dynamic = "force-static";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();
  const buildDate = new Date().toUTCString();

  const itemsXml = posts
    .map((post) => {
      const postUrl = `${SITE_URL}/insights/${post.slug}`;
      const pubDate = new Date(post.publishDate).toUTCString();
      const title = escapeXml(post.title);
      const excerpt = escapeXml(post.excerpt || post.metaDescription || "");

      return `    <item>
      <title>${title}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${excerpt}</description>
      <author>team@kalvron.in (Kalvron Team)</author>
    </item>`;
    })
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kalvron Insights</title>
    <link>${SITE_URL}/insights</link>
    <description>Insights on AI operating systems, business process automation, and autonomous enterprise operations.</description>
    <language>en</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/insights/rss.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

