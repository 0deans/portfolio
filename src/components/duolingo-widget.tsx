import { Award, ExternalLink, Flame, Languages } from 'lucide-react'
import { useDuolingoProfile } from '@/hooks/useDuolingoProfile'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'

interface DuolingoWidgetProps {
  username: string
}

export function DuolingoWidget({ username }: DuolingoWidgetProps) {
  const { data, isLoading, error, refetch } = useDuolingoProfile(username)

  if (isLoading) {
    return (
      <div className="bg-card flex min-h-[195px] animate-pulse flex-col rounded-md border border-zinc-200 p-3 dark:border-zinc-700">
        <div className="mb-3">
          <Skeleton className="h-6 w-3/5 rounded" />
        </div>
        <div className="mb-3 flex-grow space-y-2">
          <div className="flex items-center gap-2 rounded border border-transparent bg-transparent p-1.5">
            <Skeleton className="size-6 flex-shrink-0 rounded" />
            <Skeleton className="h-6 w-full rounded" />
          </div>
          <div className="flex items-center gap-2 rounded border border-transparent bg-transparent p-1.5">
            <Skeleton className="size-6 flex-shrink-0 rounded" />
            <Skeleton className="h-6 w-full rounded" />
          </div>
        </div>
        <div className="mt-auto flex justify-end">
          <Skeleton className="h-4 w-1/4 rounded" />
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="border-destructive/50 bg-destructive/10 flex h-full min-h-[195px] flex-col items-center justify-center rounded-md border p-3 text-center">
        <Languages className="text-destructive/60 mb-2 size-8" />
        <p className="text-destructive mb-1 text-lg font-semibold">
          Duolingo Error
        </p>
        <p className="text-destructive/80 mb-2 max-w-[90%] text-sm">
          {error?.message || 'Could not load profile data.'}
        </p>
        <Button
          onClick={() => refetch()}
          variant="destructive"
          className="h-7 px-2"
        >
          Retry
        </Button>
      </div>
    )
  }

  return (
    <section className="noise-bg relative flex h-full flex-col overflow-hidden rounded-md border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-800/30">
      <div className="mb-3">
        <h2 className="text-lg leading-tight font-semibold text-green-700 dark:text-green-400">
          Learning English
        </h2>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400/80">
          via Duolingo
        </p>
      </div>

      <div className="mb-3 flex-grow space-y-2">
        <div className="flex items-center gap-2 rounded border border-orange-400/30 bg-orange-50 p-1.5 dark:border-orange-500/30 dark:bg-orange-900/20">
          <Flame className="size-4 flex-shrink-0 text-orange-500 dark:text-orange-400" />
          <div className="flex-1">
            <span className="text-sm font-bold text-orange-700 dark:text-orange-300">{`${data.streak || 0}`}</span>
            <span className="text-xs text-orange-600/90 dark:text-orange-400/80">
              {' '}
              Day Streak
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded border border-yellow-400/30 bg-yellow-50 p-1.5 dark:border-yellow-500/30 dark:bg-yellow-900/20">
          <Award className="size-4 flex-shrink-0 text-yellow-500 dark:text-yellow-400" />
          <div className="flex-1">
            <span className="text-sm font-bold text-yellow-700 dark:text-yellow-300">{`${(data.totalXp || 0).toLocaleString()}`}</span>
            <span className="text-xs text-yellow-600/90 dark:text-yellow-400/80">
              {' '}
              Total XP
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto text-right">
        <Button
          variant="link"
          size="sm"
          className="h-auto p-0 text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          asChild
        >
          <a
            href={`https://www.duolingo.com/profile/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5"
          >
            View Profile
            <ExternalLink className="size-3" />
          </a>
        </Button>
      </div>
    </section>
  )
}
