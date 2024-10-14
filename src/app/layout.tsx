import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const ogImage = "/assets/defaults/ogImage.png"

export const metadata: Metadata = {
  title: `Remedify`,
  description: `Blog site for project Remedify.`,
  openGraph: {
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body
        className={cn(poppins.className, "main")}
      >
        {/* <ThemeSwitcher /> */}
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
