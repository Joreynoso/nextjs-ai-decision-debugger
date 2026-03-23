"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

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
      <div className={`
        fixed inset-0 bg-background/95 backdrop-blur-xl z-40 transition-all duration-300 md:hidden
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}>
        <div className="flex flex-col items-start justify-center h-full px-10 gap-8">
          <Link 
            href="/" 
            className="text-4xl font-medium text-foreground"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link 
            href="/about" 
            className="text-4xl font-medium text-foreground"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </Link>
          <Link 
            href="/debugger" 
            className="text-4xl font-medium text-foreground"
            onClick={() => setIsOpen(false)}
          >
            Depurador
          </Link>
        </div>
      </div>
    </nav>
  )
}
