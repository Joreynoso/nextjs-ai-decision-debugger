"use client"

import { 
    MessageSquare, 
    Send, 
    Cpu, 
    Search, 
    Terminal, 
    Database, 
    CheckCircle, 
    Flag,
    LucideIcon
} from "lucide-react"
import { cn } from "@/lib/utils"

export type WorkflowStep = {
    id: number;
    title: string;
    description?: string;
    status: 'completed' | 'current' | 'pending';
    type: 'input' | 'prompt' | 'response' | 'decision' | 'tool' | 'result' | 'final' | 'end';
}

const TYPE_TO_ICON: Record<string, LucideIcon> = {
    input: MessageSquare,
    prompt: Send,
    response: Cpu,
    decision: Search,
    tool: Terminal,
    result: Database,
    final: CheckCircle,
    end: Flag
}

interface WorkflowVisualizerProps {
    steps: WorkflowStep[];
    className?: string;
}

export default function WorkflowVisualizer({ steps, className }: WorkflowVisualizerProps) {
    return (
        <div className={cn("flex flex-col gap-0", className)}>
            {steps.map((step, index) => {
                const Icon = TYPE_TO_ICON[step.type] || MessageSquare
                const isLast = index === steps.length - 1
                
                return (
                    <div key={step.id} className="group relative flex gap-8">
                        {/* Timeline Line & Icon */}
                        <div className="flex flex-col items-center">
                            <div className={cn(
                                "z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500",
                                step.status === 'completed' ? "bg-primary border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]" : 
                                step.status === 'current' ? "bg-background border-primary border-2 animate-pulse" :
                                "bg-muted/50 border-border/50 text-muted-foreground/50"
                            )}>
                                <Icon className={cn(
                                    "h-5 w-5",
                                    step.status === 'completed' ? "text-primary-foreground" : 
                                    step.status === 'current' ? "text-primary" : 
                                    "text-muted-foreground/30"
                                )} />
                            </div>
                            
                            {!isLast && (
                                <div className={cn(
                                    "w-px grow transition-colors duration-500",
                                    step.status === 'completed' ? "bg-primary/50" : "bg-border/20"
                                )} />
                            )}
                        </div>

                        {/* Content Card */}
                        <div className={cn(
                            "mb-12 flex-1 rounded-2xl border p-6 transition-all duration-500",
                            "bg-card/40 border-border/25 backdrop-blur-md",
                            step.status === 'current' && "border-primary/40 bg-primary/5 -translate-y-1 shadow-2xl",
                            step.status === 'completed' && "hover:border-primary/30 hover:bg-secondary/20"
                        )}>
                            <div className="flex items-center justify-between mb-3">
                                <h4 className={cn(
                                    "font-serif text-xl font-medium tracking-tight",
                                    step.status === 'pending' ? "text-muted-foreground/30" : "text-foreground"
                                )}>
                                    {step.title}
                                </h4>
                                <span className={cn(
                                    "text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md",
                                    step.status === 'completed' ? "bg-primary/10 text-primary" :
                                    step.status === 'current' ? "bg-primary text-primary-foreground animate-pulse" :
                                    "bg-muted text-muted-foreground/30"
                                )}>
                                    {step.status === 'completed' ? 'Completado' :
                                     step.status === 'current' ? 'Actual' :
                                     'Pendiente'}
                                </span>
                            </div>
                            
                            {step.description && (
                                <p className={cn(
                                    "text-base font-medium leading-relaxed max-w-2xl transition-colors",
                                    step.status === 'pending' ? "text-muted-foreground/20" : 
                                    step.status === 'current' ? "text-muted-foreground/80" :
                                    "text-muted-foreground/40 group-hover:text-muted-foreground/60"
                                )}>
                                    {step.description}
                                </p>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
