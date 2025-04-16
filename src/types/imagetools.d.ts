declare module '*&as=picture' {
  const picture: {
    img: {
      src: string
      w: number
      h: number
    }
    sources: {
      [key: string]: string // srcset string, e.g., "img-50w.webp 50w, img-100w.webp 100w"
    }
  }

  export default picture
}
