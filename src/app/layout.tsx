import type { Metadata } from "next";
import "./globals.css";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ParticlesBackground } from "@/components/Particles";

export const metadata: Metadata = {
  title: "Viva",
  description: "The Intelligent Knowledge Infrastructure for the AI Era",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ParticlesBackground />
        <div className="relative z-10">
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
