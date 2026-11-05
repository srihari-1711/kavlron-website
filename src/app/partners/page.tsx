import { siteContent, SITE_URL } from "../../content/site";
import { PartnerForm } from "../components/ui/PartnerForm";

export const metadata = {
  title: siteContent.meta.partners.title,
  description: siteContent.meta.partners.description,
  alternates: { canonical: "/partners" },
  openGraph: { url: "/partners" },
};

export default function PartnersPage() {
  const content = siteContent.partners;
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/partners#webpage`,
    "url": `${SITE_URL}/partners`,
    "name": siteContent.meta.partners.title,
    "description": siteContent.meta.partners.description,
    "datePublished": "2026-10-01T00:00:00Z",
    "dateModified": "2026-11-05T00:00:00Z",
    "inLanguage": "en",
    "isPartOf": {
      "@id": `${SITE_URL}/#website`
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-10 max-w-7xl mx-auto min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <div className="mb-8 inline-flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-accent-amber rounded-full" />
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-text-dim">
          {content.eyebrow}
        </span>
      </div>
      
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">{content.headline}</h1>
        <p className="text-xl text-text-muted leading-relaxed">{content.subhead}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        {content.benefits.map((b, i) => (
          <div key={i} className="flex flex-col gap-4 p-8 border border-border bg-surface">
            <div className="w-2 h-2 bg-accent-amber" />
            <h3 className="text-xl font-bold text-white tracking-tight">{b.title}</h3>
            <p className="text-text-muted leading-relaxed">{b.body}</p>
          </div>
        ))}
      </div>
      
      <div className="border border-border bg-surface p-8 lg:p-16 mb-24">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-amber block mb-4">
            How it works
          </span>
          <p className="text-2xl text-white font-medium leading-normal mb-8">
            {content.howItWorks}
          </p>
        </div>
      </div>
      
      <div id="partner-apply" className="max-w-2xl">
        <h2 className="text-3xl font-bold text-white mb-8">{content.ctaHeadline}</h2>
        <PartnerForm />
      </div>
    </div>
  );
}
