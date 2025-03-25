import { Briefcase, Download, Mail } from 'lucide-react'
import { MobileNav } from './components/mobile-nav'
import { ProfileInfo } from './components/profile-info'
import { ThemeListener } from './components/theme-listener'
import { ThemeToggle } from './components/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Button } from './components/ui/button'

const navItems = [
  { title: 'Home', href: '#' },
  { title: 'Projects', href: '#' },
  { title: 'About', href: '#' },
  { title: 'Contact', href: '#' }
]

const App = () => {
  return (
    <div className="noise-bg flex min-h-screen flex-col items-center p-4">
      <ThemeListener />
      <div className="w-full max-w-4xl">
        <header className="relative">
          <div className="relative w-full overflow-hidden rounded-md">
            <img
              src="banner.jpg"
              alt="Profile banner"
              width="1200"
              height="600"
              loading="lazy"
              className="bg-secondary aspect-[16/5] max-h-72 w-full object-cover shadow-sm sm:aspect-auto"
            />
          </div>

          <div className="dark absolute bottom-2 left-2 flex items-center sm:bottom-4 sm:left-4">
            <div className="relative">
              <Avatar className="size-20 sm:size-32">
                <AvatarImage src="avatar.jpg" />
                <AvatarFallback className="text-4xl">D</AvatarFallback>
              </Avatar>
              <div className="pointer-events-none absolute inset-0 z-10">
                <img src="avatar-decoration.png" alt="Avatar decoration" />
              </div>
            </div>
            <ProfileInfo className="hidden sm:block" />
          </div>
        </header>

        <ProfileInfo className="ml-0 sm:hidden" />

        <div className="mt-4 flex items-center justify-between">
          <MobileNav items={navItems} />
          <nav className="hidden sm:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Button variant="ghost" asChild>
                    <a href={item.href}>{item.title}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>

        <main className="mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <section className="relative flex rounded-md border border-green-500">
              <div className="flex items-center justify-center bg-green-500/10 p-4">
                <Briefcase className="size-12 text-green-500 sm:size-16" />
              </div>
              <div className="flex flex-col justify-between p-3">
                <h2 className="mb-1 flex items-center gap-2 text-xl font-bold">
                  <span className="relative mr-1 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  Open to Work
                </h2>
                <p className="text-muted-foreground text-sm">
                  Full-Stack Developer with JavaScript/TypeScript
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Button size="sm" className="h-8 flex-1 gap-1" asChild>
                    <a href="/blank.pdf" download>
                      <Download className="h-3 w-3" />
                      Resume
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 flex-1 gap-1"
                    asChild
                  >
                    <a href="mailto:denysstetsenko4@gmail.com">
                      <Mail className="h-3 w-3" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
            </section>
            <section className="relative border border-gray-400 bg-gray-200 p-4">
              {/* Empty section 2 */}
            </section>
          </div>
        </main>

        <footer>
          <p>temp</p>
        </footer>
      </div>
    </div>
  )
}

export default App
