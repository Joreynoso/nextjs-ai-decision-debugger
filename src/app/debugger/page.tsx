

export default function DebuggerPage() {

    // render return
    return (
        <div className="min-h-screen flex flex-col items-center pt-40 pb-20 px-10">
            <div className="w-full max-w-4xl">
                {/* Header section */}
                <header className="mb-20 text-left border-b border-border/10 pb-12">
                    <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-foreground mb-6">
                        Depurador <span className="text-primary/80">en Vivo</span>
                    </h1>
                    <p className="max-w-2xl text-xl font-medium text-muted-foreground/60 leading-relaxed">
                        Rastrea la lógica de decisión y la ejecución de herramientas de tu Agente de IA en tiempo real con observabilidad total.
                    </p>
                </header>

                {/* Visualizer */}
                <div className="relative">
                    {/* chat aqui */}
                </div>
            </div>
        </div>
    )
}
