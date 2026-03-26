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
  image?: string
  imageAlt?: string
  facts?: string[]
}

export interface SectionProps extends Section {
  isActive: boolean
}