import { cn } from '@/lib/utils'
import { CopyableText } from './copyable-text'
import { Badge } from './ui/badge'

interface ProfileInfoProps {
  className?: string
}

export function ProfileInfo({ className }: ProfileInfoProps) {
  return (
    <div className={cn('ml-4', className)}>
      <h1 className="text-foreground text-xl font-bold">Denys</h1>
      <CopyableText
        text="@0dean"
        delayDuration={1000}
        className="text-muted-foreground -mx-1.5 font-semibold transition-all hover:mx-0"
      />
      <div className="space-x-1">
        <Badge variant="outline">he/him</Badge>
        <Badge variant="outline">20yo</Badge>
      </div>
    </div>
  )
}
