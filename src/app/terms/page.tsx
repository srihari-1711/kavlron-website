import { siteContent, SITE_URL } from "../../content/site";

export const metadata = {
  title: "Terms and Conditions | Kalvron",
  description: "Terms and Conditions for Kalvron AI OS.",
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms" },
};

export default function TermsPage() {
  const content = siteContent.legal;
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/terms#webpage`,
    "url": `${SITE_URL}/terms`,
    "name": "Terms and Conditions | Kalvron",
    "description": "Terms and Conditions for Kalvron AI OS.",
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
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">Terms and Conditions</h1>
      
      <div className="prose prose-invert max-w-none text-text-muted leading-relaxed">
        <p>These Terms and Conditions govern your use of the website operated by {content.entityName}.</p>
        
        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">1. Use of Site</h2>
        <p>By accessing this website, you agree to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">2. Disclaimer</h2>
        <p>The materials on Kalvron&apos;s website are provided on an &apos;as is&apos; basis. {content.entityName} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">3. Limitations</h2>
        <p>In no event shall {content.entityName} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kalvron&apos;s website.</p>

        <h2 className="text-white mt-10 mb-4 text-2xl font-bold">4. Governing Law</h2>
        <p>Any claim relating to Kalvron&apos;s website shall be governed by applicable laws without regard to its conflict of law provisions.</p>
      </div>
    </div>
  );
}
