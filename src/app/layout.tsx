import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MY SEGW-AI",
  description: "PWA application with Next 13",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  // themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Nikos Mpakaris" },
    {
      name: "Nikos Mpakaris",
      url: "https://www.google.com",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <link
        rel="stylesheet"
        href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css"
        crossOrigin="anonymous"
      ></link> */}
      {/* Set Nodge-Color for iOS */}
      <meta name="theme-color" content="#2c7a7b"></meta>
      <body className={inter.className}>{children}</body>
      {/* // "theme_color": "#2196f3",
      // "background_color": "#2196f3", */}
    </html>
  );
}
