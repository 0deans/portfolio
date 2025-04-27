import { Footer } from './footer'
import { Header } from './header'
import { StickyNav } from './sticky-nav'
import { ThemeListener } from './theme-listener'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="noise-bg flex min-h-screen flex-col items-center">
      <ThemeListener />
      <Header />

      <div className="w-full max-w-4xl p-4 pt-0">
        <StickyNav />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
