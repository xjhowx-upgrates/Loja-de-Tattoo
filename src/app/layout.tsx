import type { Metadata } from "next";
import { Londrina_Solid, Inter, Island_Moments } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const londrinaSolid = Londrina_Solid({
  weight: ["100", "300", "400", "900"],
  variable: "--font-londrina-solid",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const islandMoments = Island_Moments({
  weight: ["400"],
  variable: "--font-island-moments",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tattoo Shop",
  description: "Página comercial de um tatuador.",
  icons: {
    icon: '/Logo.png',
    shortcut: '/Logo.png',
    apple: '/Logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${londrinaSolid.variable} ${inter.variable} ${islandMoments.variable} antialiased`}>
      <body
        className="bg-background-color min-h-screen flex flex-col justify-between"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
