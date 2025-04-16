import { FC } from 'react'

type ImgProps = {
  src: string
  w: number
}

type ImgPropsH = ImgProps & { h: number }

export type ImgMeta = {
  img: ImgPropsH
  sources: { [key: string]: string }
}

type ImageProps = {
  meta: ImgMeta | ImgMeta[]
  sizes?: string
  alt?: string
  loading?: 'lazy' | 'eager'
  imageClass?: string
  pictureClass?: string
}

export const Image: FC<ImageProps> = ({
  meta,
  sizes = '100vw',
  alt = '',
  loading = 'lazy',
  imageClass = '',
  pictureClass = ''
}) => {
  const metadata = Array.isArray(meta) ? meta[0] : meta
  const { sources, img: fallback } = metadata

  const parseSrcSet = (srcset: string): ImgProps[] =>
    srcset.split(',').map((entry) => {
      const [src, w] = entry.trim().split(' ')
      return { src, w: parseInt(w.replace('w', '')) }
    })

  return (
    <picture className={pictureClass}>
      {Object.entries(sources).map(([type, srcMeta]) => {
        const sourceList = parseSrcSet(srcMeta)

        return (
          <source
            key={type}
            type={`image/${type}`}
            sizes={sizes}
            srcSet={sourceList.map((m) => `${m.src} ${m.w}w`).join(', ')}
          />
        )
      })}
      <img
        src={fallback.src}
        alt={alt}
        loading={loading}
        className={imageClass}
      />
    </picture>
  )
}
