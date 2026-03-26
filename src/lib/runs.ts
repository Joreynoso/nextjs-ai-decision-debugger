import prisma from "@/lib/prisma"
import { Run } from "@/types/types"

export async function getRuns(userId: string): Promise<Run[]> {
    try {
        const run = await prisma.run.findMany({
            where: { userId },
            include: { events: true },
            orderBy: {
                createdAt: "desc",
            },
        })
        return run
    } catch (error) {
        console.error("Error al obtener los runs:", error)
        throw new Error("Error al obtener los runs")
    }
}

export async function createRun(userId: string, input: string): Promise<Run> {
    try {
        if (!userId) {
            throw new Error("User ID is required")
        }

        if (!input) {
            throw new Error("Input is required")
        }

        const run = await prisma.run.create({
            data: {
                userId,
                input,
            },
            include: { events: true },
        })
        return run
    } catch (error) {
        console.error("Error al crear el run:", error)
        throw new Error("Error al crear el run")
    }
}
export async function getRunById(runId: string, userId: string): Promise<Run | null> {
    try {
        const run = await prisma.run.findUnique({
            where: { 
                id: runId,
                userId: userId // confirmamos pertenencia
            },
            include: { events: true },
        })
        return run
    } catch (error) {
        console.error("Error al obtener el run por ID:", error)
        throw new Error("Error al obtener el run")
    }
}

export async function deleteRun(runId: string, userId: string): Promise<void> {
    try {
        await prisma.run.delete({
            where: { 
                id: runId,
                userId: userId // seguridad para borrar solo lo propio
            },
        })
    } catch (error) {
        console.error("Error al borrar el run:", error)
        throw new Error("Error al borrar el run")
    }
}