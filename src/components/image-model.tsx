import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel'
import { Dialog, DialogContent, DialogFooter } from './ui/dialog'

interface ImageModalProps {
  images: string[]
  alt: string
  isOpen: boolean
  initialIndex: number
  onClose: () => void
}

export function ImageModal({
  images,
  alt,
  initialIndex,
  isOpen,
  onClose
}: ImageModalProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex size-full min-w-full flex-col rounded-none border-none p-14">
        <div
          className="absolute inset-0 scale-125 bg-cover bg-center blur-lg brightness-30"
          style={{
            backgroundImage: `url(${images[current - 1]})`
          }}
        ></div>

        <div className="flex h-full flex-1 items-center justify-center">
          <Carousel
            setApi={setApi}
            opts={{ startIndex: initialIndex }}
            className="h-full"
          >
            <CarouselContent className="h-full max-h-full">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex h-full items-center justify-center"
                >
                  <img
                    src={image}
                    alt={`${alt} - image ${current} of ${images.length}`}
                    className="max-h-full object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <DialogFooter>
          <div className="text-muted-foreground z-10 mx-auto text-sm">
            Image {current} of {count}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
