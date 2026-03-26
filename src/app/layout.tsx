import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import SizeScreenHelper from '@/components/Helpers/ScreenSizeHelper';

// clerk provider
import { ClerkProvider, } from "@clerk/nextjs";

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

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const clerkAppearance = {
    variables: {
      colorBackground: "oklch(0.1448 0 0)",
      colorInputBackground: "oklch(0.2134 0 0)",
      colorText: "oklch(0.9851 0 0)",
      colorTextSecondary: "oklch(0.7090 0 0)",
      colorPrimary: "oklch(0.5555 0 0)",
      colorInputText: "oklch(0.9851 0 0)",
      colorNeutral: "oklch(0.9851 0 0)",
      borderRadius: "0.25rem",
    },
    elements: {
      avatarBox: "size-8",
      card: "border border-white/10 shadow-2xl",
      userButtonPopoverCard: "bg-black border border-white/10 shadow-xl rounded-xl mt-2",
      userButtonPopoverFooter: "hidden",
      modalBackdrop: { backgroundColor: "rgba(0,0,0,0.8)", backdropFilter: "blur(4px)" },
      formFieldInput: "bg-white/5 border-white/10 text-foreground",
      formFieldLabel: "text-muted-foreground",
      formButtonPrimary: "bg-primary text-primary-foreground hover:bg-primary/90",
      footerActionLink: "text-primary hover:text-primary/80",
      identityPreviewText: "text-foreground",
      headerTitle: "text-foreground",
      headerSubtitle: "text-muted-foreground",
    }
  }

  // render return
  return (
    <ClerkProvider
      appearance={clerkAppearance}
    >
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
              background: "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(255, 255, 255, 0.05), transparent 70%), #000000",
            }}
          />

          {/* main container */}
          <div className="relative z-10 flex min-h-screen flex-col">
            {/* navbar */}
            <Navbar />

            {/* main */}
            <main className="grow">
              {children}
            </main>

            <Footer />

            {/* helper size screen tailwind */}
            <SizeScreenHelper />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
