'use client'

import TechCard from '@/components/About/TechCard'
import { motion, Variants } from 'framer-motion'

// ── SVG icons ────────────────────────────────────────────────
const NextjsIcon = () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5" fill="currentColor">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6H36.5V36.6h13.7l40.5 62.4C99.4 90.6 107 78.2 107 64c0-23.7-15.5-43.8-36.9-50.8L64 0z" />
        <path d="M91.4 36.6h11.4V91L91.4 74V36.6z" />
    </svg>
)

const ReactIcon = () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5" fill="currentColor">
        <circle cx="64" cy="64" r="11" />
        <path d="M64 30c-19.8 0-38 4.9-51.4 13C5.9 48.5 2 54.6 2 61s3.9 12.5 10.6 18c13.4 8.1 31.6 13 51.4 13s38-4.9 51.4-13C122.1 73.5 126 67.4 126 61s-3.9-12.5-10.6-18C102 34.9 83.8 30 64 30zm0 6c18.6 0 35.7 4.6 47.8 12 5.9 3.6 8.2 7.3 8.2 11s-2.3 7.4-8.2 11C99.7 77.4 82.6 82 64 82S28.3 77.4 16.2 70C10.3 66.4 8 62.7 8 59s2.3-7.4 8.2-11C28.3 40.6 45.4 36 64 36z" />
        <path d="M42.6 15.9C33.3 31.7 28 51.7 28 73s5.3 41.3 14.6 57.1c4.6 8 9.8 13.5 14.9 15.9 2.5 1.2 4.9 1.5 7 1s4.3-1.9 6.4-4.6c4.6-5.8 8.4-15.4 10.8-27.7C83.8 102.8 85 88.3 85 73s-1.2-29.8-3.3-41.7C79.3 19.1 75.5 9.5 70.9 3.7c-2.1-2.7-4.3-4.1-6.4-4.6s-4.5-.2-7 1C52.4 2.5 47.2 7.9 42.6 15.9zm5.2 3c4-6.9 8.3-11.3 12-13.1 1.8-.9 3.3-1.1 4.6-.8 1.3.3 2.9 1.3 4.6 3.5 3.9 4.9 7.4 13.8 9.6 25.6 2.1 11.7 3.3 26 3.3 40.9s-1.2 29.2-3.3 40.9c-2.2 11.8-5.7 20.7-9.6 25.6-1.7 2.2-3.3 3.2-4.6 3.5-1.3.3-2.8.1-4.6-.8-3.7-1.8-8-6.2-12-13.1C37.7 118.8 34 99.3 34 79s3.7-39.8 13.8-60.1z" />
    </svg>
)

const TypeScriptIcon = () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5" fill="currentColor">
        <path d="M74.2 73.4v7.2c1.2.6 2.6 1.1 4.1 1.4 1.5.3 3.1.5 4.7.5 1.6 0 3.1-.2 4.5-.5 1.4-.3 2.6-.9 3.6-1.7 1-.8 1.8-1.8 2.4-3 .6-1.2.9-2.7.9-4.4 0-1.3-.2-2.4-.6-3.3-.4-.9-1-1.8-1.7-2.5-.7-.7-1.6-1.4-2.7-2-1-.6-2.2-1.2-3.5-1.8-1-.4-1.8-.8-2.6-1.2-.7-.4-1.3-.7-1.8-1.1-.5-.4-.9-.8-1.1-1.2-.3-.4-.4-.9-.4-1.5 0-.5.1-1 .4-1.4.2-.4.6-.8 1-1.1.4-.3.9-.5 1.5-.7.6-.2 1.2-.2 1.9-.2 1.3 0 2.5.2 3.7.7 1.2.5 2.2 1.2 3.1 2.1V59c-.9-.7-2-1.3-3.2-1.6-1.2-.4-2.6-.6-4.1-.6-1.6 0-3 .2-4.4.6-1.3.4-2.5 1-3.5 1.8-1 .8-1.7 1.8-2.3 2.9-.6 1.1-.8 2.4-.8 3.8 0 2.4.7 4.4 2.2 5.9 1.5 1.5 3.7 2.8 6.7 3.9 1 .4 2 .8 2.8 1.2.8.4 1.5.8 2 1.3.5.4.9.9 1.2 1.4.3.5.4 1.1.4 1.8 0 .6-.1 1.1-.3 1.6-.2.5-.6.9-1 1.2-.4.3-1 .6-1.6.8-.6.2-1.3.3-2.1.3-2.7 0-5.3-1-7.7-3zM60 57.6H71V51H41v6.6h11v31.8h8V57.6z" />
    </svg>
)

const PrismaIcon = () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5" fill="currentColor">
        <path d="M4.12 101.77 60.42 4.6a4.17 4.17 0 0 1 7.42.54l55.93 97.17a4.17 4.17 0 0 1-3.22 6.2L64.8 114.4a4.17 4.17 0 0 1-2.62-.74L7.4 108.03a4.17 4.17 0 0 1-3.28-6.26zM30.63 99.3l47.31 7.28L64.2 22.15 30.63 99.3z" />
    </svg>
)

const TailwindIcon = () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5" fill="currentColor">
        <path d="M64 16c-16 0-26 8-30 24 6-8 13-11 21-9 5 1 8 4 12 8 6 6 12 13 26 13 16 0 26-8 30-24-6 8-13 11-21 9-5-1-8-4-12-8-6-6-12-13-26-13zm-32 32C16 48 6 56 2 72c6-8 13-11 21-9 5 1 8 4 12 8 6 6 12 13 26 13 16 0 26-8 30-24-6 8-13 11-21 9-5-1-8-4-12-8-6-6-12-13-26-13z" />
    </svg>
)

const ShadcnIcon = () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5" fill="currentColor">
        <path d="M107.5 20.5 20.5 107.5M67.5 107.5 107.5 60.5" stroke="currentColor" strokeWidth="12" strokeLinecap="round" fill="none" />
    </svg>
)

const SonnerIcon = () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5" fill="currentColor">
        <rect x="16" y="72" width="96" height="40" rx="8" />
        <rect x="24" y="52" width="80" height="33" rx="6" fillOpacity=".5" />
        <rect x="32" y="32" width="64" height="33" rx="6" fillOpacity=".25" />
    </svg>
)

const GroqIcon = () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5" fill="currentColor">
        <circle cx="64" cy="64" r="50" fillOpacity=".2" />
        <path d="M64 34c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" />
        <path d="M84 64h10c0-16.5-13.5-30-30-30v10c11 0 20 9 20 20z" />
    </svg>
)

const MotionIcon = () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5" fill="currentColor">
        <path d="M0 128l64-64 64 64zM0 64l64-64 64 64-64 64z" />
    </svg>
)

const NodemailerIcon = () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5" fill="currentColor">
        <path d="M10 20h108v88H10z" fillOpacity=".1" />
        <path d="M118 20L64 65 10 20m108 88H10V20l54 45 54-45v88z" />
    </svg>
)

const SupabaseIcon = () => (
    <svg viewBox="0 0 128 128" className="w-5 h-5" fill="currentColor">
        <path d="M64 0L13.8 30.6v66.8L64 128l50.2-30.6V30.6L64 0zm0 108.7L25.3 84.4V43.6L64 19.3l38.7 24.3v40.8L64 108.7z" />
        <path d="M64 34.5L34.5 52.6v22.8L64 93.5l29.5-18.1V52.6L64 34.5z" />
    </svg>
)

// ── Tech stack data ───────────────────────────────────────────
const techStack = [
    {
        name: "Next.js 16",
        description: "The foundation of modern web apps. Leveraging React Server Components and optimized routing.",
        icon: <NextjsIcon />,
    },
    {
        name: "React 19",
        description: "Cutting-edge UI library with enhanced Server Actions and the new use() API for data fetching.",
        icon: <ReactIcon />,
    },
    {
        name: "TypeScript",
        description: "Strictly typed codebase ensuring reliability, maintainability, and superior developer experience.",
        icon: <TypeScriptIcon />,
    },
    {
        name: "Prisma ORM",
        description: "Type-safe database tool for intuitive schema modeling and seamless data migrations.",
        icon: <PrismaIcon />,
    },
    {
        name: "Supabase",
        description: "The open source Firebase alternative. Providing robust PostgreSQL storage and real-time capabilities.",
        icon: <SupabaseIcon />,
    },
    {
        name: "Tailwind CSS v4",
        description: "The latest evolution of styling. High-performance, engine-first utility classes with zero overhead.",
        icon: <TailwindIcon />,
    },
    {
        name: "Motion (Framer)",
        description: "Production-ready motion library for React. Powering fluid, cinematic UI transitions.",
        icon: <MotionIcon />,
    },
    {
        name: "Groq AI",
        description: "Ultra-fast inference engine for LLMs, providing the intelligence behind decision debugging.",
        icon: <GroqIcon />,
    },
    {
        name: "shadcn/ui",
        description: "Beautifully designed components that follow accessibility standards out of the box.",
        icon: <ShadcnIcon />,
    },
    {
        name: "Nodemailer",
        description: "Reliable transactional email delivery for system notifications and alerts.",
        icon: <NodemailerIcon />,
    },
    {
        name: "Sonner",
        description: "The toast component that just works. Minimalist, high-performance feedback system.",
        icon: <SonnerIcon />,
    },
]

// ── Animation variants ────────────────────────────────────────
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1] as const
        }
    }
}

// ─────────────────────────────────────────────────────────────

export default function AboutPage() {

    // render return
    return (
        <div className="min-h-screen flex flex-col items-center pt-40 pb-32 px-10">
            <div className="w-full max-w-7xl">

                {/* Header section — matches Debugger/Workflow style */}
                <header className="mb-20 text-left border-b border-border/10 pb-12">
                    <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-foreground mb-6">
                        Stack <span className="text-primary/80">Tecnológico</span>
                    </h1>
                    <p className="max-w-2xl text-xl font-medium text-muted-foreground/60 leading-relaxed">
                        Las tecnologías y herramientas modernas que dan vida a este gestor de proyectos, diseñadas para máxima observabilidad y rendimiento.
                    </p>
                </header>

                {/* Animated tech grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {techStack.map((tech) => (
                        <motion.div key={tech.name} variants={itemVariants}>
                            <TechCard
                                name={tech.name}
                                description={tech.description}
                                icon={tech.icon}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}