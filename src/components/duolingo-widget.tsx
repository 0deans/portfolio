import { Award, ExternalLink, Flame } from 'lucide-react'
import { useDuolingoProfile } from '@/hooks/useDuolingoProfile'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'

interface DuolingoWidgetProps {
  username: string
}

export function DuolingoWidget({ username }: DuolingoWidgetProps) {
  const { data, isLoading, error, refetch } = useDuolingoProfile(username)

  if (isLoading) {
    return <Skeleton className="h-[180px]" />
  }

  if (error || !data) {
    return (
      <section className="rounded-md border border-red-600 bg-red-600/10">
        <div className="flex h-[180px] w-full flex-col items-center justify-center space-y-4">
          <span className="font-mono font-semibold">Duolingo</span>
          <p className="text-muted-foreground">
            {error?.message || 'Something went wrong. Please try again.'}
          </p>
          <Button onClick={() => refetch()} size="lg">
            Retry
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="relative flex rounded-md bg-gradient-to-b from-green-600 to-green-500">
      <div className="w-2/3 flex-col justify-center p-4 text-white">
        <h2 className="mb-3 text-xl font-bold">Learning English</h2>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-amber-300" />
            <span className="font-medium">{`${data.streak} day streak`}</span>
          </div>

          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-300" />
            <span className="font-medium">
              {`${data.totalXp.toLocaleString()} total XP`}
            </span>
          </div>
        </div>

        <Button
          className="mt-4 w-fit gap-2 border-white/40 bg-white/20 text-white hover:bg-white/30"
          size="sm"
          asChild
        >
          <a
            href={`https://www.duolingo.com/profile/${username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
      </div>

      <div className="relative flex w-1/3 items-center justify-center">
        <div className="relative h-24 w-24">
          <img src="owl.svg" alt="Owl" className="object-contain" />
        </div>
      </div>
    </section>
  )
}
