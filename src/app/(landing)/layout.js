import Footer from "../../components/Footer";

export const metadata = {
  title: "Creatyum Media — Divulgación sobre diseño y creatividad",
  description:
    "En Creatyum ofrecemos artículos y podcasts sobre diseño y creatividad que educan, empoderan y amplían tu perspectiva en el sector creativo.",
  openGraph: {
    title: "Creatyum Media — Divulgación sobre diseño y creatividad",
    description:
      "En Creatyum ofrecemos artículos y podcasts sobre diseño y creatividad que educan, empoderan y amplían tu perspectiva en el sector creativo.",
    url: "https://creatyum.media",
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
    title: "Creatyum Media — Divulgación sobre diseño y creatividad",
    description:
      "En Creatyum ofrecemos artículos y podcasts sobre diseño y creatividad que educan, empoderan y amplían tu perspectiva en el sector creativo.",
    images: ["https://creatyum.media/creatyum-default-cover.webp"],
  },
  canonical: "https://creatyum.media",
  rss: "https://creatyum.media/api/rss",
  icons: {
    icon: "/favicon.png",
  },
};

export default function LandingLayout({ children }) {
  return (
    <>
      <main className="mx-auto pt-4 md:pt-8">{children}</main>
      <Footer />
    </>
  );
}
