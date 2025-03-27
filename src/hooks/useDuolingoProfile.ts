import { useQuery } from '@tanstack/react-query'

interface DuolingoData {
  streak: number
  totalXp: number
}

const fetchDuolingoProfile = async (username: string) => {
  const baseUrl = 'https://api.allorigins.win/get?url='
  const duolingoUrl = `https://www.duolingo.com/2017-06-30/users?username=${username}`
  const url = `${baseUrl}${encodeURIComponent(duolingoUrl)}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch Duolingo profile')
  }

  const data = await response.json()
  const profile = JSON.parse(data.contents).users[0] as DuolingoData

  return profile
}

export function useDuolingoProfile(username: string) {
  return useQuery({
    queryKey: ['duolingo-profile', username],
    queryFn: () => fetchDuolingoProfile(username)
  })
}
