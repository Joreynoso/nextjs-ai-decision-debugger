"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const clerkAppearance = {
    elements: {
      avatarBox: "size-8",
      userButtonPopoverCard: "bg-black border border-white/10 shadow-xl rounded-xl mt-2",
      userButtonPopoverFooter: "hidden",

      // Modal backdrop
      modalBackdrop: "bg-black/80 backdrop-blur-sm",

      // Card del modal (el contenedor blanco)
      card: "bg-black border border-white/10 shadow-2xl",

      // Inputs
      formFieldInput: "bg-white/5 border-white/10 text-foreground",
      formFieldLabel: "text-muted-foreground",

      // Botón principal
      formButtonPrimary: "bg-primary text-primary-foreground hover:bg-primary/90",

      // Links internos (¿No tenés cuenta? etc)
      footerActionLink: "text-primary hover:text-primary/80",
      identityPreviewText: "text-foreground",
      headerTitle: "text-foreground",
      headerSubtitle: "text-muted-foreground",
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50   flex items-center justify-between px-6 md:px-10 py-6 md:py-8 bg-background/50 backdrop-blur-md border-b border-border/5">
        <Link href="/" className="text-xl font-medium tracking-tight text-foreground hover:opacity-80 transition-opacity">
          Ai-Debugger
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/stack" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Stack
          </Link>
          <Link href="/debugger" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Depurador
          </Link>

          {/* Auth buttons — Desktop */}
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Iniciar sesión
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-out">
            <SignUpButton mode="modal">
              <button className="text-sm font-bold text-foreground hover:opacity-80 transition-opacity cursor-pointer">
                Registrarse
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-998 p-2 text-foreground hover:bg-secondary/20 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay — FUERA del nav */}
      <div className={cn(
        "fixed inset-0 z-998 md:hidden flex-col bg-black",
        isOpen ? 'flex' : 'hidden'
      )}>
        {/* Header del overlay */}
        <div className="flex items-center justify-between px-6 py-6">
          <Link href="/" className="text-xl font-medium text-foreground" onClick={() => setIsOpen(false)}>
            Ai-Debugger
          </Link>
          <button
            className="p-2 text-foreground hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-start px-6 pt-8 gap-8">
          <Link href="/" className="text-3xl font-medium text-foreground" onClick={() => setIsOpen(false)}>
            Inicio
          </Link>
          <Link href="/stack" className="text-3xl font-medium text-foreground" onClick={() => setIsOpen(false)}>
            Stack
          </Link>
          <Link href="/debugger" className="text-3xl font-medium text-foreground" onClick={() => setIsOpen(false)}>
            Depurador
          </Link>

          <div className="flex flex-col items-start gap-8 mt-4 w-full">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button
                  className="text-3xl font-medium text-foreground text-left cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Iniciar sesión
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button
                  className="text-3xl font-medium text-foreground text-left cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Registrarse
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>
      </div>
    </>
  )
}