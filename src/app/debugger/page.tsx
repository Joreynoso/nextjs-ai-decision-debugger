// src/app/debugger/page.tsx
"use client"

import { useState } from "react"
import WorkflowVisualizer from "@/components/Home/WorkflowVisualizer"
import type { WorkflowStep } from "@/components/Home/WorkflowVisualizer"
import { Run } from "@/types/types"

// import types
import type { Event, EventType } from '@/types/types'

export default function DebuggerPage() {
    const [input, setInput] = useState("")
    const [run, setRun] = useState<Run | null>(null)
    const [steps, setSteps] = useState<WorkflowStep[]>([])
    const [loading, setLoading] = useState(false)

    // handle
    async function handleExecute() {
        if (!input.trim()) return
        setLoading(true)

        try {
            // 1. Crear el Run
            const runRes = await fetch("/api/runs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ input }),
            })
            if (!runRes.ok) return
            const newRun: Run = await runRes.json()
            setRun(newRun)

            // 2. Crear events reales
            const eventsToCreate = [
                { type: "input", data: { message: input } },
                { type: "thinking", data: { message: "Analizando el prompt..." } },
                { type: "tool_call", data: { message: "Llamando herramienta MCP..." } },
                { type: "result", data: { message: "Respuesta generada." } },
            ]

            for (const event of eventsToCreate) {
                await fetch("/api/events", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ runId: newRun.id, ...event }),
                })
            }

            // 3. Leer events del run
            const eventsRes = await fetch(`/api/events/${newRun.id}`)
            const events: Event[] = await eventsRes.json()

            // 4. Convertir a WorkflowStep
            const newSteps: WorkflowStep[] = events.map((event, index) => ({
                id: index,
                type: event.type as EventType,
                title: event.type,
                description: (event.data as Record<string, string>)?.message ?? "",
                status: index === events.length - 1 ? "current" : "completed",
            }))

            setSteps(newSteps)

        } catch (error) {
            console.error("Error:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center pt-40 pb-20 px-10">
            <div className="w-full max-w-4xl">

                {/* Header */}
                <header className="mb-20 text-left border-b border-border/10 pb-12">
                    <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-foreground mb-6">
                        Depurador <span className="text-primary/80">en Vivo</span>
                    </h1>
                    <p className="max-w-2xl text-xl font-medium text-muted-foreground/60 leading-relaxed">
                        Rastrea la lógica de decisión y la ejecución de herramientas de tu Agente de IA en tiempo real.
                    </p>
                </header>

                {/* Input */}
                <div className="flex gap-4 mb-20">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Escribí tu prompt..."
                        className="flex-1 rounded-xl border border-border/25 bg-card/40 backdrop-blur-md px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40"
                    />
                    <button
                        onClick={handleExecute}
                        disabled={loading || !input.trim()}
                        className="rounded-xl bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:opacity-90 disabled:opacity-30"
                    >
                        {loading ? "Ejecutando..." : "Ejecutar"}
                    </button>
                </div>

                {/* Run ID */}
                {run && (
                    <p className="text-xs text-muted-foreground/40 mb-12 font-mono">
                        Run ID: {run.id}
                    </p>
                )}

                {/* Visualizer */}
                {steps.length > 0 && (
                    <WorkflowVisualizer steps={steps} />
                )}

            </div>
        </div>
    )
}