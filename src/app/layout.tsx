import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ClientProviders } from "@/components/providers/ClientProviders";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaviyarasu S — Frontend Web Developer",
  description:
    "Portfolio of Kaviyarasu S, a Frontend Web Developer specializing in React, Next.js, and Tailwind CSS. Building fast, responsive, and beautiful web applications.",
  keywords: ["Frontend Developer", "React", "Next.js", "Tailwind CSS", "Portfolio", "Kaviyarasu"],
  authors: [{ name: "Kaviyarasu S" }],
  openGraph: {
    title: "Kaviyarasu S — Frontend Web Developer",
    description: "Building fast, responsive, and beautiful web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaviyarasu S — Frontend Web Developer",
    description: "Building fast, responsive, and beautiful web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          poppins.variable
        )}
      >
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
