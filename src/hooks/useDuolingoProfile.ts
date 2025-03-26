import { useQuery } from '@tanstack/react-query'

interface DuolingoData {
  streak: number
  totalXp: number
}

const fetchDuolingoProfile = async (username: string) => {
  const url = new URL('https://www.duolingo.com/2017-06-30/users')
  url.searchParams.set('username', username)

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch Duolingo profile')
  }

  const data = await response.json()
  const profile = data.users[0] as DuolingoData

  return profile
}

export function useDuolingoProfile(username: string) {
  return useQuery({
    queryKey: ['duolingo-profile', username],
    queryFn: () => fetchDuolingoProfile(username)
  })
}
