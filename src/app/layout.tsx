import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FilmGrain from "@/components/FilmGrain";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ebuka's Portfolio",
  description:
    "Portfolio of Ebuka Eleogu. Specialized in multilayer PCB design, RF signal intelligence, embedded C++ firmware, and defense systems prototyping.",
  keywords: [
    "Ebuka Eleogu Portfolio",
    "Hardware Systems",
    "PCB Design Lagos",
    "RF Portfolio",
    "Embedded Systems C++",
    "KiCad Fusion 360 Prototyping",
    "Defense Tech Prototyping Nigeria",
  ],
  authors: [{ name: "Ebuka Eleogu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans h-full overflow-hidden antialiased`}
      >
        <ThemeProvider>
          <FilmGrain />
          <div className="flex flex-col h-full">
            <Navbar />
            <main className="flex-1 min-h-0 overflow-y-auto scroll-area">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
