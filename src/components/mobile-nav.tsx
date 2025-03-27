import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

interface MobileNavProps {
  items: {
    title: string
    href: string
  }[]
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[240px] sm:w-[300px]"
        // Issue: https://github.com/shadcn-ui/ui/issues/844 (anchor link scroll bug)
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-4">
          {items.map((item) => (
            <Button
              key={item.title}
              variant="ghost"
              className="justify-start"
              asChild
              onClick={() => setOpen(false)}
            >
              <a href={item.href}>{item.title}</a>
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
