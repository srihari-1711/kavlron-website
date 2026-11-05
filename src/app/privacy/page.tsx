import { siteContent, SITE_URL } from "../../content/site";

export const metadata = {
  title: "Privacy Policy | Kalvron",
  description: "Privacy Policy for Kalvron AI OS.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

export default function PrivacyPage() {
  const content = siteContent.legal;
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/privacy#webpage`,
    "url": `${SITE_URL}/privacy`,
    "name": "Privacy Policy | Kalvron",
    "description": "Privacy Policy for Kalvron AI OS.",
    "datePublished": "2026-09-01T00:00:00Z",
    "dateModified": "2026-11-05T00:00:00Z",
    "inLanguage": "en",
    "isPartOf": {
      "@id": `${SITE_URL}/#website`
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-10 max-w-3xl mx-auto min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {/* DRAFT: needs review by a lawyer before launch. */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none text-text-muted leading-relaxed">
        <p>This Privacy Policy describes how {content.entityName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, and shares your personal information when you use our website and services.</p>
        
        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">1. Information We Collect</h2>
        <p>We collect information you provide directly to us through forms on our website, including:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Full name</li>
          <li>Work email address</li>
          <li>Phone number</li>
          <li>Company or Agency name</li>
          <li>Automation interests and client details</li>
        </ul>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">2. How We Use Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Schedule and conduct discovery calls</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Send administrative updates and service information</li>
          <li>Analyze website usage via privacy-preserving analytics to improve user experience</li>
        </ul>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">3. Data Sharing and Transfer</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to strict confidentiality obligations.</p>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">4. Analytics and Tracking</h2>
        <p>We use Google Analytics (GA4) in a strictly privacy-respecting configuration. Analytics tracking only initiates after you explicitly accept our cookie banner. No personally identifiable information (PII) is passed to Google Analytics.</p>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">5. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at <a href={`mailto:${content.contactEmail}`} className="text-accent-amber hover:underline">{content.contactEmail}</a>.</p>
      </div>
    </div>
  );
}
