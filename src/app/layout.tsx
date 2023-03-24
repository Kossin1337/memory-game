"use client";

import { App } from "./App";
import localFont from "next/font/local";

import "./index.scss";

/* Application metadata */
export const metadata = {
  title: "Memory Cards Game",
  description: "Using Next.js 13 & React.js & TypeScript & SCSS",
};

/* Local font import */
const myFont = localFont({
  src: "../../public/fonts/Chopsic.otf",
  display: "swap",
  style: "normal",
  weight: "nomral",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <style jsx global>{`
        :root {
          --main-font: ${myFont.style.fontFamily};
        }
      `}</style>
      <body>
        <App />
      </body>
    </html>
  );
}
