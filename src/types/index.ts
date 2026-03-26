import type { ReactNode } from "react"

export interface AbbrevCard {
  abbrev: string
  full: string
  example: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  cards?: AbbrevCard[]
}

export interface SectionProps extends Section {
  isActive: boolean
}