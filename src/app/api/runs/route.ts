import { NextRequest, NextResponse } from 'next/server'
import { auth } from "@clerk/nextjs/server"
import { getRuns, createRun } from "@/lib/runs"

export async function GET(request: NextRequest) {
    const {userId} = await auth()
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const runs = await getRuns(userId)
        return NextResponse.json(runs, { status: 200 })
    } catch (error) {
        console.error("Error al obtener runs:", error)
        return NextResponse.json({ error: "Error al obtener runs" }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    const {userId} = await auth()

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const { input } = await request.json()
        if (!input) {
            return NextResponse.json({ error: "Input is required" }, { status: 400 })
        }

        const run = await createRun(userId, input)
        return NextResponse.json(run, { status: 201 })
    } catch (error) {
        console.error("Error al crear run:", error)
        return NextResponse.json({ error: "Error al crear run" }, { status: 500 })
    }
}


