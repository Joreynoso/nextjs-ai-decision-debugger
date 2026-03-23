import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import Navbar from "@/components/Navigation/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ai-Debugger | Depuración visual de agentes IA",
  description: "Plataforma premium para depurar la lógica y ejecución de agentes de inteligencia artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${newsreader.variable} dark h-full antialiased`}
      style={{ colorScheme: 'dark' }}
    >
      <body className={`${inter.className} min-h-screen relative bg-black antialiased`}>
        {/* Dark Gray Top Glow Background - Absolute for single embrace */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 255, 255, 0.05), transparent 70%), #000000",
          }}
        />
        
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
