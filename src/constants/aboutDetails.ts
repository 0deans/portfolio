import { Calendar, Languages, LucideIcon, MapPin } from 'lucide-react'

export interface AboutDetail {
  icon: LucideIcon
  label: string
  value: string
}

export const aboutDetails: AboutDetail[] = [
  {
    icon: Calendar,
    label: 'Birthdate',
    value: '30.06.2004'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kyiv region, Ukraine'
  },
  {
    icon: Languages,
    label: 'Languages',
    value: 'Ukrainian (Native), Russian (Fluent), English (Beginner)'
  }
]
