"use client"

import { Brain, Zap, Activity, Search, Clock, AlertTriangle } from 'lucide-react'
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"


export const features = [
    {
        id: 1,
        icon: Brain,
        title: 'Seguimiento de Decisiones',
        description: 'Entiende por qué el agente elige cada acción con razonamiento estructurado y registros de decisión.'
    },
    {
        id: 2,
        icon: Zap,
        title: 'Ejecución de Herramientas',
        description: 'Inspecciona cada llamada a herramientas, incluyendo entradas, salidas y resultados detallados.'
    },
    {
        id: 3,
        icon: Activity,
        title: 'Observabilidad Total',
        description: 'Sigue todo el ciclo de vida de una tarea — desde la entrada hasta el resultado final — con transparencia total.'
    },
    {
        id: 4,
        icon: Search,
        title: 'Inspección de Prompts',
        description: 'Mira los prompts exactos enviados al LLM y analiza cómo influyen en el comportamiento.'
    },
    {
        id: 5,
        icon: Clock,
        title: 'Línea de Tiempo',
        description: 'Sigue cada paso del agente en una línea de tiempo clara y estructurada diseñada para depuración.'
    },
    {
        id: 6,
        icon: AlertTriangle,
        title: 'Análisis de Errores',
        description: 'Identifica fallos, inspecciona casos borde y entiende qué salió mal en cualquier paso.'
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1] as any
        }
    }
}

export default function CardsHome() {
    return (
        <div className='w-full flex flex-col items-center px-10'>
            <div className='w-full max-w-7xl'>
                
                {/* Section Title - Centered */}
                <motion.div 
                    className="mb-16 border-b border-border/10 pb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
                        Capacidades <span className="text-primary/80">Principales</span>
                    </h2>
                </motion.div>

                <motion.div 
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {features.map((feature) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={feature.id}
                                variants={itemVariants}
                                className={cn(
                                    'group flex flex-col items-center text-center p-8 rounded-2xl border border-border/25 transition-all duration-500',
                                    'bg-card/40 backdrop-blur-md hover:border-primary/30 hover:bg-secondary/20 hover:-translate-y-2 hover:shadow-2xl'
                                )}
                            >
                                <div className='mb-6 p-4 rounded-xl bg-primary/5 text-primary/60 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110'>
                                    <Icon className='w-6 h-6 stroke-[1.5]' />
                                </div>
                                <h3 className='font-serif text-xl font-medium mb-3 tracking-tight text-foreground'>
                                    {feature.title}
                                </h3>
                                <p className='text-base font-medium text-muted-foreground/40 leading-relaxed max-w-sm transition-colors group-hover:text-muted-foreground/60'>
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}