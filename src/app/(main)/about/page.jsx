import React from "react";
import AboutPageContent from "./AboutPageContent";

export const metadata = {
  title: "Sobre Creatyum | Creatyum Studio",
  description:
    "Creatyum Studio es un proyecto paralelo de Creatyum enfocado en servicios profesionales de branding y diseño web.",
  openGraph: {
    title: "Sobre Creatyum | Creatyum Studio",
    description:
      "Creatyum Studio es un proyecto paralelo de Creatyum enfocado en servicios profesionales de branding y diseño web.",
    url: "https://creatyum.media/about",
    type: "website",
    images: [
      {
        url: "https://creatyum.media/creatyum-default-cover.webp",
        width: 1200,
        height: 630,
        alt: "Creatyum Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Creatyum | Creatyum Studio",
    description:
      "Creatyum Studio es un proyecto paralelo de Creatyum enfocado en servicios profesionales de branding y diseño web.",
    images: ["https://creatyum.media/creatyum-default-cover.webp"],
  },
  canonical: "https://creatyum.media/about",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-2 md:px-0">
      <h1>Sobre Creatyum</h1>

      <AboutPageContent />
    </div>
  );
}
