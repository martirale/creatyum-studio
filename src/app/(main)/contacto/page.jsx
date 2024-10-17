import React from "react";
import { handleForm } from "../../../utils/ContactAction";

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

      <div className="grid grid-cols-12 gap-4 md:gap-12">
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-center">
            <form
              action={handleForm}
              method="POST"
              className="flex flex-col w-full gap-4"
            >
              <input
                type="text"
                placeholder="Nombre y apellido"
                name="name"
                className="px-5 py-3 rounded-full block bg-yellow text-black border border-black dark:bg-black dark:text-yellow dark:border-yellow"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                name="email"
                className="px-5 py-3 rounded-full block bg-yellow text-black border border-black dark:bg-black dark:text-yellow dark:border-yellow"
              />
              <input
                type="text"
                placeholder="Empresa (opcional)"
                name="company"
                className="px-5 py-3 rounded-full block bg-yellow text-black border border-black dark:bg-black dark:text-yellow dark:border-yellow"
              />
              <textarea
                placeholder="¿En qué podemos ayudarte?"
                name="content"
                className="px-5 py-3 rounded-3xl h-32 block bg-yellow text-black border border-black dark:bg-black dark:text-yellow dark:border-yellow"
              />

              <button className="px-5 py-3 rounded-full font-BricolageGrotesque font-bold text-2xl uppercase bg-black text-yellow border border-black hover:bg-yellow hover:text-black dark:bg-yellow dark:text-black dark:border-yellow dark:hover:bg-black dark:hover:text-yellow">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
