import { GET as getInsightsRss } from "../insights/rss.xml/route";

export const dynamic = "force-static";

export async function GET() {
  return getInsightsRss();
}
