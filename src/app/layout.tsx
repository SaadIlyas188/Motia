import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "motia — a study of memory, fragrance, and inherited femininity",
  description:
    "A practice-led thesis by Shiza Khan examining Arabian jasmine as a sensory, cultural, and symbolic medium through which memory, identity, and personal experience are understood and expressed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-motia-cream text-motia-text">
        {/* ── TOP BANNER ── */}
        <div className="fixed top-0 left-0 right-0 z-[60] h-8 bg-motia-dark flex items-center justify-center px-4">
          <p className="font-body text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-motia-muted text-center">
            Shiza Khan
            <span className="mx-2 text-motia-muted/40">·</span>
            Bachelor of Design — Fashion Designing
            <span className="hidden sm:inline">
              <span className="mx-2 text-motia-muted/40">·</span>
              Beaconhouse National University
            </span>
          </p>
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
