import { ArrowRight, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative flex min-h-dvh w-full items-end justify-start overflow-hidden px-10 pb-20 bg-transparent">

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl w-full text-left">

        {/* Heading - Imposing but Balanced */}
        <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-[0.95] text-balance text-foreground font-medium">
          <span className="text-primary/90">Depurando</span> <br />
          Agentes IA <br />
          Paso a Paso
        </h1>

        {/* Bottom Bar: Description & CTA */}
        <div className="mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-t border-border/10 pt-10">
          <div className="max-w-xl space-y-4">
              <p className="font-sans text-muted-foreground/50 text-xl md:text-2xl leading-tight tracking-tight font-medium">
                Visualiza cómo los <span className="text-foreground">LLMs toman decisiones</span>, llaman a herramientas y ejecutan tareas a través de un flujo estructurado.
              </p>
          </div>
          
          <Link href="/debugger" className="shrink-0 p-1 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm group/btn">
            <Button
              size="lg"
              className="rounded-full px-10 py-7 text-lg font-medium transition-all bg-foreground text-background hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
            >
              Empezar ahora
              <ArrowRight className="ml-3 size-5 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
