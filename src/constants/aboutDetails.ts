import { Calendar, Languages, LucideIcon, MapPin } from 'lucide-react'
import { TFunction } from 'i18next'

export interface AboutDetail {
  icon: LucideIcon
  label: string
  value: string
}

export const getAboutDetails = (t: TFunction): AboutDetail[] => [
  {
    icon: Calendar,
    label: t('about.birthdate'),
    value: '30.06.2004'
  },
  {
    icon: MapPin,
    label: t('about.location'),
    value: t('about.locationValue')
  },
  {
    icon: Languages,
    label: t('about.languages'),
    value: t('about.languagesValue')
  }
]
