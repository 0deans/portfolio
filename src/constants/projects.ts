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

export const projects: Project[] = [
  {
    title: 'SimpleFF',
    description:
      'A simple interface for FFmpeg built with Tauri/SvelteKit that allows users to select video files and reformat them with customizable codec options.',
    link: 'https://github.com/0deans/SimpleFF',
    tags: ['Tauri', 'SvelteKit', 'TypeScript', 'FFmpeg'],
    images: getProjectImages('simpleff')
  },
  {
    title: 'Climate Visualization Platform',
    description:
      'A collaborative project with a team of 2, where we developed a website featuring a map displaying temperature readings from multiple measuring stations, isolines, and the temperature gradient.',
    link: 'https://climate.0dean.lol/',
    tags: ['React', 'TypeScript', 'GIS', 'Data Visualization'],
    images: getProjectImages('climate')
  },
  {
    title: 'Food Composition Recognition App',
    description:
      'A mobile application for recognizing the composition of food (dishes) using image recognition technology.',
    link: 'https://github.com/0deans/foodly',
    tags: ['Flutter', 'Machine Learning', 'Mobile Development'],
    images: getProjectImages('foodly')
  },
  {
    title: 'Vehicle License Plate Recognition',
    description:
      'A system for recognizing vehicle license plates for cars and other vehicles using computer vision techniques.',
    link: 'https://github.com/0deans/Car-Plate-Recognition',
    tags: ['Computer Vision', 'Python', 'Machine Learning'],
    images: getProjectImages('license-plate')
  }
]
