import { Check, Copy } from 'lucide-react'
import { ReactNode, useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface CopyableTextProps {
  text: string
  delayDuration?: number
  children?: ReactNode
  className?: string
}

export function CopyableText({
  text,
  delayDuration,
  children,
  className
}: CopyableTextProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={delayDuration}>
        <TooltipTrigger asChild>
          <button
            onClick={copyToClipboard}
            className={cn(
              'hover:bg-muted inline-flex items-center gap-1 rounded px-1.5 py-0.5 transition-colors',
              className
            )}
            aria-label={`Copy ${text} to clipboard`}
          >
            {children || <span>{text}</span>}
            {copied ? (
              <Check className="h-3.5 w-3.5 text-green-500" />
            ) : (
              <Copy className="h-3.5 w-3.5 opacity-70" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{copied ? 'Copied!' : 'Click to copy'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
