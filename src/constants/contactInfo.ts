import {
  IconType,
  SiDiscord,
  SiGithub,
  SiTelegram
} from '@icons-pack/react-simple-icons'
import { LucideIcon, Mail } from 'lucide-react'

export interface ContactInfo {
  platform: string
  value: string
  icon: LucideIcon | IconType
  link: string
}

export const contactInfo: ContactInfo[] = [
  {
    platform: 'Email',
    value: 'denysstetsenko4@gmail.com',
    icon: Mail,
    link: 'mailto:denysstetsenko4@gmail.com'
  },
  {
    platform: 'Telegram',
    value: '@odean0',
    icon: SiTelegram,
    link: 'https://t.me/odean0'
  },
  {
    platform: 'Discord',
    value: '@0dean',
    icon: SiDiscord,
    link: 'https://discord.gg/pNwtYbEjSQ'
  },
  {
    platform: 'GitHub',
    value: '@0deans',
    icon: SiGithub,
    link: 'https://github.com/0deans'
  }
]
