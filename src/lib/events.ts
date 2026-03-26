import prisma from "@/lib/prisma"
import { Event } from "@/types/types"
import { Prisma } from '@/generated/prisma/client'

export async function createEvent(
    runId: string, 
    type: string, 
    data: Prisma.InputJsonValue, 
    userId: string | null = null
): Promise<Event> {
    try {
        if (!runId) {
            throw new Error("Run ID is required")
        }

        const event = await prisma.event.create({
            data: {
                runId,
                type,
                data,
                userId,
            },
        })
        return event as unknown as Event
    } catch (error) {
        console.error("Error al crear el evento:", error)
        throw new Error("Error al crear el evento")
    }
}

export async function getEventsByRun(runId: string): Promise<Event[]> {
    try {
        const events = await prisma.event.findMany({
            where: { runId },
            orderBy: {
                createdAt: "asc",
            },
        })
        return events as unknown as Event[]
    } catch (error) {
        console.error("Error al obtener los eventos del run:", error)
        throw new Error("Error al obtener los eventos")
    }
}

export async function getEventsByType(runId: string, type: string): Promise<Event[]> {
    try {
        const events = await prisma.event.findMany({
            where: { 
                runId,
                type 
            },
            orderBy: {
                createdAt: "asc",
            },
        })
        return events as unknown as Event[]
    } catch (error) {
        console.error("Error al obtener eventos por tipo:", error)
        throw new Error("Error al obtener los eventos")
    }
}
