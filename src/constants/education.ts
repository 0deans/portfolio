import { TFunction } from 'i18next'

export interface Education {
  degree: string
  institution: string
  period: string
}

export const getEducation = (t: TFunction): Education[] => [
  {
    degree: t('educationItems.bachelor.degree'),
    institution: t('educationItems.bachelor.institution'),
    period: t('educationItems.bachelor.period')
  },
  {
    degree: t('educationItems.highSchool.degree'),
    institution: '',
    period: t('educationItems.highSchool.period')
  },
  {
    degree: t('educationItems.middleSchool.degree'),
    institution: '',
    period: t('educationItems.middleSchool.period')
  }
]
