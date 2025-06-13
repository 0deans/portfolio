export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
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
    name: 'Backend',
    skills: ['Node.js', 'Hono.js', 'PostgreSQL', 'SQLite']
  },
  {
    name: 'Mobile & Desktop',
    skills: ['Tauri', 'Flutter']
  },
  {
    name: 'Tooling & Other',
    skills: [
      'C#',
      'Java',
      'Git',
      'Docker',
      'ESLint',
      'Prettier',
      'Vite',
      'Cloudflare Pages/Workers'
    ]
  }
]
