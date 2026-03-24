import CardsHome from '@/components/Home/CardsHome';
import Hero from '@/components/Home/Hero';
import Footer from '@/components/Footer/Footer';
import WorkflowVisualizer, { WorkflowStep } from '@/components/Home/WorkflowVisualizer';

const HOME_FLOW: WorkflowStep[] = [
    { id: 1, title: "Input recibido", description: "El usuario ha enviado una consulta sobre la documentación técnica.", status: 'completed', type: 'input' },
    { id: 2, title: "Prompt enviado al LLM", description: "Se ha estructurado el contexto y enviado la petición al modelo GPT-4.", status: 'completed', type: 'prompt' },
    { id: 3, title: "Respuesta del LLM", description: "El modelo sugiere buscar información específica en la base de conocimientos.", status: 'completed', type: 'response' },
    { id: 4, title: "Decisión: usar tool \"search_docs\"", description: "Agente determina que requiere la herramienta 'search_docs' para continuar.", status: 'completed', type: 'decision' },
    { id: 5, title: "Tool ejecutada", description: "Llamada a la función interna con parámetros: { query: 'API authentication' }.", status: 'current', type: 'tool' },
    { id: 6, title: "Resultado recibido", description: "Esperando respuesta de la herramienta...", status: 'pending', type: 'result' },
    { id: 7, title: "Decisión final", description: "Generando respuesta conclusiva basada en los datos obtenidos.", status: 'pending', type: 'final' },
    { id: 8, title: "Fin", description: "Proceso finalizado correctamente.", status: 'pending', type: 'end' }
]

export default function Home() {

  // render return
  return (
    <div className="w-full flex flex-col justify-center items-center gap-32 pb-32">
      <Hero />
      <CardsHome />
      
      {/* Workflow Section */}
      <section className="w-full max-w-7xl px-10">
          <div className="mb-16 border-b border-border/10 pb-8 text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
                  Flujo del <span className="text-primary/80">Agente</span>
              </h2>
          </div>
          <WorkflowVisualizer steps={HOME_FLOW} />
      </section>

      <Footer />
    </div>
  )
}