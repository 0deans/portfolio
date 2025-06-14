import { TFunction } from 'i18next'

export interface NavItem {
  title: string
  href: string
}

export const getNavItems = (t: TFunction): NavItem[] => [
  { title: t('nav.home'), href: '/' },
  { title: t('nav.projects'), href: '#projects' },
  { title: t('nav.about'), href: '#about' },
  { title: t('nav.skills'), href: '#skills' },
  { title: t('nav.education'), href: '#education' },
  { title: t('nav.contact'), href: '#contact' }
]
