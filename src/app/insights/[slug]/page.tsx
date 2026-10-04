import { getPostBySlug, getAllPosts } from "../../../lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteContent, SITE_URL } from "../../../content/site";
import FadeIn from "../../components/FadeIn";
import AnimatedMarkdown from "../../components/AnimatedMarkdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) {
    return {};
  }
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `/insights/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      images: post.coverImage ? [
        {
          url: `${SITE_URL}${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : undefined,
    },
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto space-y-12">
      <header className="space-y-8 border-b border-border pb-12">
        <Link href="/insights" className="text-accent-amber hover:underline text-sm font-bold flex items-center gap-2">
          &larr; Back to Insights
        </Link>
        <FadeIn delay={100}>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {post.title}
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <time className="block text-sm font-mono text-text-muted">
            {new Date(post.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </time>
        </FadeIn>
        {post.coverImage && (
          <FadeIn delay={300}>
            <div className="relative w-full aspect-[1200/630] rounded-xl overflow-hidden border border-border mt-8 bg-surface">
              <img src={post.coverImage} alt={post.title} className="object-cover w-full h-full" />
            </div>
          </FadeIn>
        )}
      </header>

      <FadeIn delay={400}>
        <AnimatedMarkdown html={post.bodyHtml} />
      </FadeIn>

      <FadeIn delay={200}>
        <div className="pt-16 mt-16 border-t border-border">
          <div className="bg-surface border border-accent-amber/30 p-8 text-center space-y-6 rounded-xl">
            <h2 className="text-2xl font-bold text-white">{siteContent.cta.headline}</h2>
            <p className="text-text-muted">{siteContent.cta.body}</p>
            <Link href="/#book-a-call" className="inline-block bg-white text-background px-8 py-4 font-bold hover:bg-accent-amber hover:text-white transition-colors">
              {siteContent.cta.button}
            </Link>
          </div>
        </div>
      </FadeIn>
    </article>
  );
}
