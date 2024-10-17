import React from "react";
import ContactForm from "./ContactForm";

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
        url: "https://studio.creatyum.com/creatyum-default-cover.webp",
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
    images: ["https://studio.creatyum.com/creatyum-default-cover.webp"],
  },
  canonical: "https://studio.creatyum.com/contacto",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-2 md:px-0">
      <h1>Contacto</h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-6xl md:text-7xl font-extrabold mb-8">
            ¿Hablamos?
          </h2>
          <p className="mb-16 md:mb-0">
            ¿No quieres que tu marca sea igual a las demás? ¿Te gustaría mejorar
            la que ya tienes o crearla de cero? Estás en la web correcta. Llena
            el formulario y así, podremos tener una llamada de contacto y te
            prepararé un presupuesto adaptado a lo que necesites.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
