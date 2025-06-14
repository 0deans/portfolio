import { useTranslation } from 'react-i18next'
import { getNavItems } from '@/constants'
import { LanguageToggle } from '../common/language-toggle'
import { MobileNav } from '../common/mobile-nav'
import { ThemeToggle } from '../common/theme-toggle'
import { Button } from '../ui/button'

export function StickyNav() {
  const { t } = useTranslation()
  const navItems = getNavItems(t)

  return (
    <div className="noise-bg bg-background/40 dark:bg-background/65 sticky top-4 z-50 -mx-2 mb-8 overflow-hidden rounded-md px-2 py-2 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <MobileNav items={navItems} />
        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            {navItems.map((item) => (
              <li key={item.title}>
                <Button variant="ghost" asChild>
                  <a href={item.href}>{item.title}</a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
