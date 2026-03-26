import { NextRequest, NextResponse } from 'next/server'
import { auth } from "@clerk/nextjs/server"
import { deleteRun } from "@/lib/runs"

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const {userId} = await auth()

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const {id} = params

    try {
        const runs = await deleteRun(id, userId)
        return NextResponse.json(runs, { status: 200 })
    } catch (error) {
        console.error("Error al obtener runs:", error)
        return NextResponse.json({ error: "Error al obtener runs" }, { status: 500 })
    }
}