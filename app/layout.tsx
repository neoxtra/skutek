import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const archivo = Archivo({ 
  subsets: ["latin"],
  variable: '--font-archivo',
  weight: ['400', '600', '700'], // regular, semibold, bold
});

export const metadata: Metadata = {
  title: "Skutek",
  description: "Skutek website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}