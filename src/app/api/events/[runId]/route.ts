import { NextRequest, NextResponse } from 'next/server'
import { auth } from "@clerk/nextjs/server"
import { getEventsByRun } from "@/lib/events"

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ runId: string }> }
) {
    const { userId } = await auth()
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const { runId } = await params
        const events = await getEventsByRun(runId)
        return NextResponse.json(events, { status: 200 })
    } catch (error) {
        console.error("Error al obtener events:", error)
        return NextResponse.json({ error: "Error al obtener events" }, { status: 500 })
    }
}
