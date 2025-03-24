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
      </div>
    </div>
  )
}

export default App
