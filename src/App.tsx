import {
  Briefcase,
  Calendar,
  Download,
  Github,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Send,
  User
} from 'lucide-react'
import MediaQuery from 'react-responsive'
import { DuolingoWidget } from './components/duolingo-widget'
import { MobileNav } from './components/mobile-nav'
import { ProfileInfo } from './components/profile-info'
import { ThemeListener } from './components/theme-listener'
import { ThemeToggle } from './components/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Button } from './components/ui/button'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '#' },
  { title: 'About', href: '#about' },
  { title: 'Contact', href: '#' }
]

const education = [
  {
    degree: "Bachelor's Degree - Software Engineering",
    institution: 'ISTU',
    period: '9/2021 - present'
  },
  {
    degree: 'High School (Complete Secondary Education)',
    institution: '',
    period: '9/2019 - 5/2021'
  },
  {
    degree: 'Middle School (Basic Secondary Education)',
    institution: '',
    period: '9/2010 - 6/2019'
  }
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
                <AvatarImage src="avatar.jpg" alt="@0dean" />
                <AvatarFallback className="text-4xl">D</AvatarFallback>
              </Avatar>
              <div className="pointer-events-none absolute inset-0 z-10">
                <img src="avatar-decoration.png" alt="Avatar decoration" />
              </div>
            </div>
            <MediaQuery minWidth={640}>
              <ProfileInfo />
            </MediaQuery>
          </div>
        </header>

        <MediaQuery maxWidth={640}>
          <ProfileInfo className="ml-0" />
        </MediaQuery>

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
              <div className="flex flex-col justify-center p-3">
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
                  <Button size="lg" className="flex-1 gap-1" asChild>
                    <a href="/blank.pdf" download>
                      <Download className="h-3 w-3" />
                      Resume
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 gap-1"
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
            <DuolingoWidget username="0dean" />
          </div>

          <section id="about" className="mt-16 scroll-mt-16">
            <div className="mb-6 flex items-center gap-3">
              <User className="text-primary h-6 w-6" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-lg leading-relaxed">
                  I'm a <strong>Full-Stack Developer</strong> with over{' '}
                  <strong>two years</strong> of experience in web development. I
                  focus on building <strong>clean</strong>,{' '}
                  <strong>efficient</strong>, and <strong>responsive</strong>{' '}
                  applications while constantly improving my skills through
                  real-world projects.{' '}
                  <strong className="italic">I enjoy working in a team</strong>{' '}
                  and taking new challenges.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  My journey in development started in high school when I got
                  into <strong>modding Minecraft</strong>, creating custom
                  modifications and clients in <strong>Java</strong>. That early
                  passion led me to software development, where I continue to
                  explore and grow.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Calendar className="text-muted-foreground mt-0.5 h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Birthdate</h3>
                    <p className="text-muted-foreground">30.06.2004</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-muted-foreground mt-0.5 h-5 w-5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">
                      Kyiv region, Ukraine
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Languages className="text-muted-foreground mt-0.5 h-5 w-5 min-w-5" />
                  <div>
                    <h3 className="font-medium">Languages</h3>
                    <p className="text-muted-foreground">
                      Ukrainian (Native), Russian (Fluent), English (Beginner)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="mt-16 scroll-mt-16">
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="text-primary h-6 w-6" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="relative">
              <div className="from-primary to-primary/20 absolute top-2 bottom-2 left-4 w-1 rounded-full bg-gradient-to-b"></div>
              <div className="space-y-10 pb-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative ml-8">
                    <div className="bg-primary absolute -left-3.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full"></div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground mb-1 text-sm">
                        {edu.period}
                      </span>
                      <h3 className="text-lg font-medium">{edu.degree}</h3>
                      {edu.institution && (
                        <p className="text-muted-foreground">
                          {edu.institution}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 border-t py-8">
          <div className="px-4">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} 0dean. All rights reserved.
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/0deans"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://t.me/odean0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send className="h-5 w-5" />
                    <span className="sr-only">Telegram</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:denysstetsenko4@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
