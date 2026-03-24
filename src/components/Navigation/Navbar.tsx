"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 md:py-8 bg-background/50 backdrop-blur-md border-b border-border/5">
      <Link href="/" className="text-xl font-medium tracking-tight text-foreground hover:opacity-80 transition-opacity z-50">
        Ai-Debugger
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Inicio
        </Link>
        <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Nosotros
        </Link>
        <Link href="/debugger" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Depurador
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden z-50 p-2 text-foreground hover:bg-secondary/20 rounded-full transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-x-0 top-[72px] bottom-0 z-40 transition-all duration-300 md:hidden",
        "bg-background/80 backdrop-blur-xl border-t border-border/10",
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      )}>
        <div className="flex flex-col items-center justify-center h-full px-10 gap-10 pb-20 text-center">
          <Link 
            href="/" 
            className="font-serif text-5xl font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link 
            href="/about" 
            className="font-serif text-5xl font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </Link>
          <Link 
            href="/debugger" 
            className="font-serif text-5xl font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Depurador
          </Link>
        </div>
      </div>
    </nav>
  )
}
