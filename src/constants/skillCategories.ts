import { TFunction } from 'i18next'

export interface SkillCategory {
  name: string
  skills: string[]
}

export const getSkillCategories = (t: TFunction): SkillCategory[] => [
  {
    name: t('skillCategories.frontend'),
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Svelte',
      'HTML',
      'CSS',
      'Tailwind CSS'
    ]
  },
  {
    name: t('skillCategories.backend'),
    skills: ['Node.js', 'Hono.js', 'PostgreSQL', 'SQLite']
  },
  {
    name: t('skillCategories.mobileDesktop'),
    skills: ['Tauri', 'Flutter']
  },
  {
    name: t('skillCategories.tooling'),
    skills: [
      'C#',
      'Java',
      'Git',
      'Docker',
      'ESLint',
      'Prettier',
      'Vite',
      'Cloudflare Pages/Workers',
      'Kanban'
    ]
  }
]
