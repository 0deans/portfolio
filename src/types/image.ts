export type ImgProps = {
  src: string
  w: number
}

export type ImgPropsH = ImgProps & { h: number }

export type ImgMeta = {
  img: ImgPropsH
  sources: { [key: string]: string }
}
