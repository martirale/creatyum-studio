import Header from "../../components/header/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Creatyum Studio — Branding & Web Design",
  description:
    "Creatyum Studio es un proyecto paralelo de Creatyum enfocado en servicios profesionales de branding y diseño web.",
  openGraph: {
    title: "Creatyum Studio — Branding & Web Design",
    description:
      "Creatyum Studio es un proyecto paralelo de Creatyum enfocado en servicios profesionales de branding y diseño web.",
    url: "https://studio.creatyum.com",
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
    title: "Creatyum Studio — Branding & Web Design",
    description:
      "Creatyum Studio es un proyecto paralelo de Creatyum enfocado en servicios profesionales de branding y diseño web.",
    images: ["https://studio.creatyum.com/creatyum-default-cover.webp"],
  },
  canonical: "https://studio.creatyum.com",
  icons: {
    icon: "/favicon.png",
  },
};

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-auto pt-24 md:pt-28">{children}</main>
      <Footer />
    </>
  );
}
