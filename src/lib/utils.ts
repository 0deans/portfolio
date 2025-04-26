import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function splitStringRegex(str: string) {
  const characters: string[] = []
  const regex = /[\s\S]/gu

  let match: RegExpExecArray | null
  while ((match = regex.exec(str)) !== null) {
    characters.push(match[0])
  }

  return characters
}
