import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "404 Not Found — Creatyum Studio",
  description:
    "En Creatyum ofrecemos artículos y podcasts sobre diseño y creatividad que educan, empoderan y amplían tu perspectiva en el sector creativo.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto pt-24 md:pt-28">
        <div className="container mx-auto px-8 py-5 md:px-0">
          <h1>404 Not Found</h1>

          <div className="grid grid-cols-12 gap-4 md:gap-12">
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-extrabold text-7xl pb-16 md:text-9xl">
                404 Not Found
              </h2>
              <p className="text-xl mb-12 md:text-2xl">
                Lo sentimos, la página que buscas no existe.
              </p>
              <Link
                href="/"
                className="bg-yellow text-black px-8 py-4 border border-solid border-black hover:bg-black hover:text-yellow dark:bg-black dark:text-yellow dark:border-yellow dark:hover:bg-yellow dark:hover:text-black"
              >
                <FontAwesomeIcon icon={faHouse} className="w-4 h-4" /> Regresar
                al inicio
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
