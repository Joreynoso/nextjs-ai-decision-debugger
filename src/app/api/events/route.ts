import { NextRequest, NextResponse } from 'next/server'
import { auth } from "@clerk/nextjs/server"
import { createEvent } from "@/lib/events"

export async function POST(request: NextRequest) {
    const { userId } = await auth()
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const { runId, type, data } = await request.json()

        if (!runId || !type || !data) {
            return NextResponse.json({ error: "runId, type y data son requeridos" }, { status: 400 })
        }

        const event = await createEvent(runId, type, data, userId)
        return NextResponse.json(event, { status: 201 })
    } catch (error) {
        console.error("Error al crear event:", error)
        return NextResponse.json({ error: "Error al crear event" }, { status: 500 })
    }
}