import { Hero, Problem, WhatItIs, Departments, HowWeWork } from "./components/ui/HomeComponents1";
import { Team, Security, Logos, FAQ } from "./components/ui/HomeComponents2";
import { CTAForm } from "./components/ui/HomeComponents3";
import { siteContent, SITE_URL } from "../content/site";

export const metadata = {
  title: siteContent.meta.home.title,
  description: siteContent.meta.home.description,
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  const homeSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        "url": SITE_URL,
        "name": siteContent.meta.home.title,
        "description": siteContent.meta.home.description,
        "datePublished": "2026-09-01T00:00:00Z",
        "dateModified": "2026-11-05T00:00:00Z",
        "inLanguage": "en",
        "isPartOf": {
          "@id": `${SITE_URL}/#website`
        },
        "about": {
          "@id": `${SITE_URL}/#software`
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        "datePublished": "2026-09-01T00:00:00Z",
        "dateModified": "2026-11-05T00:00:00Z",
        "mainEntity": siteContent.faq.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemas) }}
      />
      <Hero />
      <Problem />
      <WhatItIs />
      <Departments />
      <HowWeWork />
      <Team />
      <Security />
      <Logos />
      <FAQ />
      <CTAForm />
    </>
  );
}
