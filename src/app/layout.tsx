import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Running Store - Katalog Produk Resmi",
  description: "Lihat koleksi produk terbaru kami dan pesan langsung dengan mudah melalui WhatsApp.",
  openGraph: {
    title: "Running Store - Katalog Resmi",
    description: "Pesan produk pilihan langsung via WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <FloatingWhatsApp />
        {children}
        </body>
    </html>
  );
}
