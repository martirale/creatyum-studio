import React from "react";
import Link from "next/link";
import IconCreatyum from "./IconCreatyum";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="border-t-black border-t-[1px] text-black dark:border-t-yellow dark:border-t-[1px] dark:text-yellow">
        <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mt-8 mb-16 md:mt-0 md:mb-0">
            <Link href="/">
              <IconCreatyum className="fill-black w-20 h-20 md:w-9 md:h-9 dark:fill-yellow" />
            </Link>
          </div>
          <div className="flex flex-col text-center font-BricolageGrotesque font-extrabold md:flex-row md:items-center md:font-Roboto md:font-normal space-y-5 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
            <Link
              href="/about"
              className="text-5xl hover:underline md:text-base"
            >
              About
            </Link>
            <Link
              href="https://creatyum.media/podcast"
              target="_blank"
              rel="noopener"
              className="text-5xl hover:underline md:text-base"
            >
              Podcast
            </Link>
            <div className="pt-12 md:pt-0">
              <Link
                href="/privacidad"
                className="text-xl mr-4 hover:underline md:text-base md:mr-8"
              >
                Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-xl hover:underline md:text-base"
              >
                Términos
              </Link>
            </div>
          </div>
          <div className="text-xs p-12 -mt-10 mb-8 text-center md:flex md:items-center md:p-0 md:mt-0 md:mb-0">
            <p>
              <Link
                href="https://alemartir.com"
                target="_blank"
                rel="noopener"
                className="hover:underline"
              >
                CREATYUM &copy; 2024 AM
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
