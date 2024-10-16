import React from "react";

export const metadata = {
  title: "Contacto | Creatyum Studio",
  description:
    "Creatyum Studio es un proyecto paralelo de Creatyum enfocado en servicios profesionales de branding y diseño web.",
  openGraph: {
    title: "Contacto | Creatyum Studio",
    description:
      "Creatyum Studio es un proyecto paralelo de Creatyum enfocado en servicios profesionales de branding y diseño web.",
    url: "https://studio.creatyum.com/contacto",
    type: "website",
    images: [
      {
        url: "https://creatyum.media/creatyum-default-cover.webp",
        width: 1200,
        height: 630,
        alt: "Creatyum Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Creatyum Studio",
    description:
      "Creatyum Studio es un proyecto paralelo de Creatyum enfocado en servicios profesionales de branding y diseño web.",
    images: ["https://creatyum.media/creatyum-default-cover.webp"],
  },
  canonical: "https://studio.creatyum.com/contacto",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-2 md:px-0">
      <h1>Contacto</h1>
    </div>
  );
}
