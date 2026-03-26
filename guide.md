# Ai-Debugger: Guía del Proyecto para Agentes IA

Este documento proporciona una visión técnica detallada del proyecto `nextjs-ai-decision-debugger` para facilitar la colaboración con otros agentes de IA.

## 🎯 Propósito del Proyecto
**Ai-Debugger** es una plataforma premium diseñada para la **depuración visual y observabilidad** de las decisiones de agentes de IA en tiempo real. Permite rastrear entradas, ejecuciones de herramientas (tool calls) y flujos de lógica interna con una estética cinematográfica y de alto rendimiento.

---

## 🏗️ Architectura y Estructura de Carpetas

```text
├── prisma/                 # Modelado de base de datos (PostgreSQL)
│   ├── schema.prisma       # Definición de modelos Run y Event
│   └── migrations/         
├── src/
│   ├── app/                # Rutas (App Router Next.js 16)
│   │   ├── debugger/       # Interfaz principal de depuración
│   │   ├── stack/          # Información del stack tecnológico (ex /about)
│   │   ├── page.tsx        # Home (Hero + Workflow visualizer)
│   │   ├── layout.tsx      # Layout global (Navbar + Footer centralizado)
│   │   └── middleware.ts   # Autenticación con Clerk
│   ├── components/
│   │   ├── About/          # Componentes para la página de Stack
│   │   ├── Home/           # Hero, WorkflowVisualizer, CardsHome
│   │   ├── Navigation/     # Navbar (Desktop/Mobile)
│   │   ├── Footer/         # Footer global
│   │   └── ui/             # Componentes base (shadcn/ui style)
│   └── lib/                # Utilidades, configuración de Prisma y Groq
└── guide.md                # Esta guía
```

---

## 🌐 Rutas Principales

| Ruta | Descripción | Estado |
| :--- | :--- | :--- |
| `/` | Landing page con Hero dinámico y visualizador de workflow. | `Activo` |
| `/stack` | Detalle del stack tecnológico (Next.js 16, React 19, Prisma, etc.). | `Activo` |
| `/debugger` | Herramienta principal de visualización de trazas e hilos de ejecución. | `En desarrollo` |
| `/api/*` | Endpoints para persistencia de `Run` y `Event`. | `Configurado` |

---

## 🗄️ Modelos de Datos (Prisma)

El esquema utiliza **PostgreSQL** (Supabase) con los siguientes modelos clave:

- **`Run`**: Representa una ejecución completa del agente.
  - Campos: `id`, `input` (el prompt inicial), `userId` (Clerk ID), `createdAt`, `events[]`.
- **`Event`**: Pasos individuales dentro de una ejecución (e.g., Tool Call, Thinking, Result).
  - Campos: `id`, `runId`, `type`, `data` (JSON), `createdAt`, `userId`.

Las migraciones están sincronizadas usando `DIRECT_URL` para operaciones sensibles de Prisma en Supabase.

---

## 📦 Dependencias Relevantes

- **Core**: `Next.js 16.2`, `React 19.2`, `TypeScript`.
- **Auth**: `@clerk/nextjs` (Middleware para protección de rutas y asociación de `userId`).
- **Database**: `Prisma ORM` v7+, `Supabase` (Storage/Postgres).
- **Styling**: `Tailwind CSS v4`, `Vanilla CSS`, `Framer Motion` (para transiciones cinemáticas).
- **AI**: `groq-sdk` (Inferencia ultra rápida para el backend).
- **Herramientas de Agente**: `@clerk/mcp-tools`, `@vercel/mcp-adapter`, `next-devtools-mcp` (configurado en `.mcp.json`).

---

## 💎 Guía Estética y Diseño

1.  **Glassmorphism**: Uso extensivo de `backdrop-blur` y bordes sutiles (`border-border/10`).
2.  **Modo Oscuro**: El proyecto es nativo `dark mode` con fondo `#000` y gradientes de brillo sutiles.
3.  **Tipografía**: Se utilizan fuentes **Inter** y **Newsreader** (serif) con un peso no mayor a `medium` para mantener la elegancia.
4.  **Alineación**: Estética minimalista, preferiblemente alineada a la izquierda en secciones de contenido largo (como en `/stack`).

---

## 🚀 Próximos Pasos para Agentes
- Implementar la lógica de filtrado de eventos por `userId` en los dashboards del `/debugger`.
- Expandir la integración de `next-devtools-mcp` para inspección profunda en tiempo de ejecución.
- Mantener la coherencia de nombres: Usar siempre **"Stack"** en lugar de "Nosotros" o "About".
