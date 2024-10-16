import React from "react";
import TermsPageContent from "./TermsPageContent";

export const metadata = {
  title: "Términos de uso | Creatyum Studio",
  description:
    "Creatyum Studio es un proyecto paralelo de Creatyum enfocado en servicios profesionales de branding y diseño web.",
  openGraph: {
    title: "Términos de uso | Creatyum Studio",
    description:
      "Creatyum Studio es un proyecto paralelo de Creatyum enfocado en servicios profesionales de branding y diseño web.",
    url: "https://studio.creatyum.com/terminos",
    type: "website",
    images: [
      {
        url: "https://studio.creatyum.com/creatyum-default-cover.webp",
        width: 1200,
        height: 630,
        alt: "Creatyum Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos de uso | Creatyum Studio",
    description:
      "Creatyum Studio es un proyecto paralelo de Creatyum enfocado en servicios profesionales de branding y diseño web.",
    images: ["https://studio.creatyum.com/creatyum-default-cover.webp"],
  },
  canonical: "https://studio.creatyum.com/terminos",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-2 md:px-0">
      <h1>Términos de uso</h1>

      <div className="grid grid-cols-12 gap-4 md:gap-12">
        <div className="col-span-12 md:col-span-8">
          <TermsPageContent />
        </div>
      </div>
    </div>
  );
}
