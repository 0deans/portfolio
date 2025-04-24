import { SiDiscord, SiGithub, SiTelegram } from '@icons-pack/react-simple-icons'
import {
  Briefcase,
  Code,
  ExternalLink,
  GraduationCap,
  Mail,
  Send,
  User
} from 'lucide-react'
import { motion } from 'motion/react'
import BannerImgMeta from './assets/banner.jpg?w=400;800&format=webp;avif;png&as=picture'
import { CopyableText } from './components/copyable-text'
import { DuolingoWidget } from './components/duolingo-widget'
import { Image } from './components/image'
import { MobileNav } from './components/mobile-nav'
import { ProjectCard } from './components/project-card'
import { ThemeListener } from './components/theme-listener'
import { ThemeToggle } from './components/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import {
  aboutDetails,
  contactInfo,
  education,
  projects,
  skillCategories
} from './constants'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '#projects' },
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Education', href: '#education' },
  { title: 'Contact', href: '#contact' }
]

const App = () => {
  return (
    <div className="noise-bg flex min-h-screen flex-col items-center">
      <ThemeListener />

      <header className="dark relative w-full pb-4 md:max-w-4xl md:p-4">
        <div className="bg-secondary aspect-[16/5] w-full overflow-hidden shadow-sm md:rounded-md">
          <Image
            meta={BannerImgMeta}
            alt="Profile banner"
            imageClass="w-full object-cover"
          />
        </div>

        <div className="absolute bottom-6 left-2 flex items-center md:bottom-8 md:left-8">
          <div className="relative">
            <Avatar className="size-20 sm:size-32">
              <AvatarImage src="avatar.jpg" alt="@0dean" />
              <AvatarFallback className="text-4xl">D</AvatarFallback>
            </Avatar>
            <div className="pointer-events-none absolute inset-0 z-10">
              <img src="avatar-decoration.png" alt="Avatar decoration" />
            </div>
          </div>
          <div className="ml-4">
            <h1 className="text-foreground text-xl font-bold">Denys</h1>
            <CopyableText
              text="@0dean"
              delayDuration={1000}
              className="text-muted-foreground -mx-1.5 font-semibold transition-all hover:mx-0"
            />
            <div className="space-x-1">
              <Badge variant="outline">he/him</Badge>
              <Badge variant="outline">20yo</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full max-w-4xl p-4 pt-0">
        <div className="flex items-center justify-between">
          <MobileNav items={navItems} />
          <nav className="hidden sm:block">
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
          <ThemeToggle />
        </div>

        <main className="mt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.section
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{ willChange: 'transform' }}
              className="noise-bg flex h-full flex-col rounded-md border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800/30"
            >
              <div className="mb-2 flex items-center gap-3">
                <Briefcase className="text-primary size-6 flex-shrink-0" />{' '}
                <h2 className="text-card-foreground flex-grow text-lg font-semibold">
                  Actively Seeking Opportunities
                </h2>
                <span className="relative flex h-3 w-3 flex-shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
              </div>
              <p className="text-muted-foreground mb-4 flex-grow text-sm text-balance">
                As a Full-Stack Developer (JavaScript/TypeScript). Ready for new
                challenges!
              </p>
              <div className="mt-auto">
                <Button variant="outline" size="sm" asChild>
                  <a href="#contact">
                    <Send className="h-4 w-4" />
                    Let's get in touch
                  </a>
                </Button>
              </div>
            </motion.section>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{ willChange: 'transform' }}
            >
              <DuolingoWidget username="0dean" />
            </motion.div>
          </div>

          <section id="projects" className="mt-16 scroll-mt-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{ willChange: 'transform' }}
              className="mb-6 flex items-center gap-3"
            >
              <Briefcase className="text-primary h-6 w-6" />
              <h2 className="text-3xl font-bold">Projects</h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {projects.map((project, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                    style={{ willChange: 'transform' }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      link={project.link}
                      images={project.images}
                    />
                  </motion.div>
                )
              })}
            </div>
          </section>

          <section id="about" className="mt-16 scroll-mt-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{ willChange: 'transform' }}
              className="mb-6 flex items-center gap-3"
            >
              <User className="text-primary h-6 w-6" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </motion.div>

            <div className="space-y-8">
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
                {aboutDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                    style={{ willChange: 'transform' }}
                    className="flex items-start gap-3"
                  >
                    <detail.icon className="text-muted-foreground mt-0.5 h-5 w-5" />
                    <div>
                      <h3 className="font-medium">{detail.label}</h3>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-16 grid scroll-mt-16 grid-cols-1 gap-16 md:grid-cols-2 md:gap-10">
            <section id="skills">
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                style={{ willChange: 'transform' }}
                className="mb-6 flex items-center gap-3"
              >
                <Code className="text-primary h-6 w-6" />
                <h2 className="text-3xl font-bold">Skills</h2>
              </motion.div>

              <div className="space-y-6">
                {skillCategories.map((category) => (
                  <div key={category.name}>
                    <h3 className="text-lg font-medium">{category.name}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => (
                        <motion.li
                          key={skill}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                          }}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.2 }}
                          transition={{ delay: index * 0.05 }}
                          style={{ willChange: 'transform' }}
                          className="text-muted-foreground bg-primary/5 rounded-md border px-3 py-1.5 text-sm"
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="education">
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                style={{ willChange: 'transform' }}
                className="mb-6 flex items-center gap-3"
              >
                <GraduationCap className="text-primary h-6 w-6" />
                <h2 className="text-3xl font-bold">Education</h2>
              </motion.div>

              <div className="relative">
                <div className="from-primary to-primary/20 absolute top-2 bottom-2 left-2 w-1 rounded-full bg-gradient-to-b"></div>
                <div className="space-y-10 pb-12">
                  {education.map((edu, index) => (
                    <div key={index} className="relative ml-8">
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                        style={{ willChange: 'transform' }}
                        className="bg-primary absolute -left-5.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full"
                      ></motion.div>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: index * 0.1 }}
                        style={{ willChange: 'transform' }}
                        className="flex flex-col"
                      >
                        <span className="text-muted-foreground mb-1 text-sm">
                          {edu.period}
                        </span>
                        <h3 className="text-lg font-medium">{edu.degree}</h3>
                        {edu.institution && (
                          <p className="text-muted-foreground">
                            {edu.institution}
                          </p>
                        )}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <section id="contact" className="mt-16 scroll-mt-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{ willChange: 'transform' }}
              className="mb-6 flex items-center gap-3"
            >
              <Send className="text-primary h-6 w-6" />
              <h2 className="text-3xl font-bold">Contact</h2>
            </motion.div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ willChange: 'transform' }}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{
                      rotate: index % 2 === 0 ? '1.5deg' : '-1.5deg',
                      scale: 1.05
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ willChange: 'transform' }}
                    className="border-primary/20 bg-primary/5 hover:bg-primary/10 group relative flex items-center rounded-md border p-4 transition-colors"
                  >
                    <div className="bg-primary/10 group-hover:bg-primary/20 mr-4 rounded-full p-3 transition-colors">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="flex-1 break-all">
                      <h3 className="text-lg font-medium">
                        {contact.platform}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {contact.value}
                      </p>
                    </div>
                    <ExternalLink className="text-muted-foreground absolute top-4 right-4 h-4 w-4 opacity-100 transition-opacity group-hover:opacity-100 md:top-1/2 md:-translate-y-1/2 md:opacity-0" />
                  </motion.div>
                </motion.a>
              ))}
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
                    <SiGithub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://t.me/odean0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiTelegram className="h-5 w-5" />
                    <span className="sr-only">Telegram</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://discord.gg/WVJPUTSu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiDiscord className="h-5 w-5" />
                    <span className="sr-only">Discord</span>
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
