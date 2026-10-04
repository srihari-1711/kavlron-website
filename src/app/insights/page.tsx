import { getAllPosts } from "../../lib/posts";
import Link from "next/link";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Insights | Kalvron AI OS",
  description: "Insights on AI automation, operating systems, and business process automation.",
  alternates: { canonical: "/insights" },
  openGraph: { url: "/insights" },
};

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto space-y-12">
      <FadeIn>
        <div className="space-y-6 border-b border-border pb-12">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Insights.<br/>
            <span className="text-text-muted">How AI runs business.</span>
          </h1>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 150}>
            <article className="group h-full flex flex-col space-y-4">
              <Link href={`/insights/${post.slug}`} className="block relative w-full aspect-[1200/630] rounded-xl overflow-hidden border border-border bg-surface">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="object-cover w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105" 
                />
              </Link>
              <div className="flex-1 space-y-3 pt-2">
                <time className="text-sm font-mono text-text-muted">
                  {new Date(post.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </time>
                <Link href={`/insights/${post.slug}`} className="block">
                  <h2 className="text-2xl font-bold text-white group-hover:text-accent-amber transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-text-muted text-lg line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
        {posts.length === 0 && (
          <p className="text-text-muted col-span-full">No insights published yet.</p>
        )}
      </div>
    </div>
  );
}
