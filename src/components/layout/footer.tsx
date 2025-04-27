import { contactInfo } from '@/constants'
import { Button } from '../ui/button'

export function Footer() {
  return (
    <footer className="mt-16 border-t py-8">
      <div className="px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} 0dean. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            {contactInfo.map((contact, index) => (
              <Button key={index} variant="ghost" size="icon" asChild>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <contact.icon className="h-5 w-5" />
                  <span className="sr-only">{contact.platform}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
