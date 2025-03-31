import { ExternalLink, ImageIcon } from 'lucide-react'
import { useState } from 'react'
import { ImageModal } from './image-model'
import { Badge } from './ui/badge'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

interface ProjectCardProps {
  title: string
  link: string
  description: string
  tags: string[]
  images: string[]
}

export function ProjectCard({
  title,
  link,
  description,
  tags,
  images
}: ProjectCardProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
    setIsImageModalOpen(true)
  }

  return (
    <>
      <div className="bg-primary/5 relative flex flex-col rounded-md border p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-medium">{title}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/80 p-2 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="text-muted-foreground mb-3 text-sm">{description}</p>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>

        <ScrollArea className="mt-auto w-full whitespace-nowrap">
          <div className="flex space-x-4 pb-4">
            {images.map((image, index) => (
              <button
                key={index}
                className="group relative h-20 w-24 shrink-0 cursor-pointer overflow-hidden rounded-sm"
                onClick={() => openModal(index)}
              >
                <img
                  src={image}
                  alt={`${title} - image ${index + 1}`}
                  className="size-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <ImageIcon className="h-6 w-6 text-white" />
                </div>
              </button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <ImageModal
        images={images}
        alt={title}
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        initialIndex={selectedImageIndex}
      />
    </>
  )
}
