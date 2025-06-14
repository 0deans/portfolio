import { TFunction } from 'i18next'
import { ImgMeta } from '@/types/image'

const allThumbs = import.meta.glob('../assets/projects/*/preview*.png', {
  query: { w: 80, format: 'webp;avif;png', as: 'picture' },
  eager: true
})

const allFulls = import.meta.glob('../assets/projects/*/preview*.png', {
  eager: true
})

const getProjectImages = (
  folder: string
): { thumb: ImgMeta; full: string }[] => {
  const thumbs = Object.entries(allThumbs)
    .filter(([path]) => path.includes(`/projects/${folder}/`))
    .map(([, mod]) => (mod as { default: ImgMeta }).default)

  const fulls = Object.entries(allFulls)
    .filter(([path]) => path.includes(`/projects/${folder}/`))
    .map(([, mod]) => (mod as { default: string }).default)

  return thumbs.map((thumb, index) => ({
    thumb,
    full: fulls[index]
  }))
}

export interface Project {
  title: string
  description: string
  link: string
  tags: string[]
  images: { thumb: ImgMeta; full: string }[]
}

export const getProjects = (t: TFunction): Project[] => [
  {
    title: t('projects.simpleff.title'),
    description: t('projects.simpleff.description'),
    link: 'https://github.com/0deans/SimpleFF',
    tags: ['Tauri', 'SvelteKit', 'TypeScript', 'FFmpeg'],
    images: getProjectImages('simpleff')
  },
  {
    title: t('projects.climate.title'),
    description: t('projects.climate.description'),
    link: 'https://climateistu.tech/',
    tags: ['React', 'TypeScript', 'GIS', 'Data Visualization'],
    images: getProjectImages('climate')
  },
  {
    title: t('projects.foodly.title'),
    description: t('projects.foodly.description'),
    link: 'https://github.com/0deans/foodly',
    tags: ['Flutter', 'Machine Learning', 'Mobile Development'],
    images: getProjectImages('foodly')
  },
  {
    title: t('projects.licensePlate.title'),
    description: t('projects.licensePlate.description'),
    link: 'https://github.com/0deans/Car-Plate-Recognition',
    tags: ['Computer Vision', 'Python', 'Machine Learning'],
    images: getProjectImages('license-plate')
  },
  {
    title: t('projects.sveltekitAuth.title'),
    description: t('projects.sveltekitAuth.description'),
    link: 'https://github.com/0deans/sveltekit-auth',
    tags: [
      'SvelteKit',
      'Lucia-Auth',
      'Authentication',
      'TypeScript',
      'Prisma',
      'Zod',
      'Tailwind CSS',
      'OAuth'
    ],
    images: getProjectImages('sveltekit-auth')
  },
  {
    title: t('projects.optifineSrc.title'),
    description: t('projects.optifineSrc.description'),
    link: 'https://github.com/0deans/Optifine-SRC',
    tags: [
      'Minecraft',
      'Java',
      'Decompilation',
      'Reverse Engineering',
      'ParchmentMC',
      'MCP-Reborn',
      'Modding'
    ],
    images: getProjectImages('optifine-src')
  }
]
