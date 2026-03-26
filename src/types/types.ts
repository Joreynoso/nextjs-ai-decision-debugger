// src/types/types.ts

import { JsonValue } from '@prisma/client/runtime/client'

export type EventType = 'tool_call' | 'thinking' | 'result' | 'error' | 'input'

export interface Event {
  id: string
  runId: string
  type: string
  data: JsonValue
  createdAt: Date
  userId: string | null
}

export interface Run {
  id: string
  input: string
  createdAt: Date
  userId: string
  events: Event[]
}