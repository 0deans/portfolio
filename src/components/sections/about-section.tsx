import { User } from 'lucide-react'
import { motion } from 'motion/react'
import { aboutDetails } from '@/constants'
import { AnimatedTextCharacter } from '../common/animated-text-character'

export function AboutSection() {
  return (
    <section id="about" className="mt-18 scroll-mt-18">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ willChange: 'transform' }}
        className="mb-6 flex items-center gap-3"
      >
        <User className="text-primary h-6 w-6" />
        <h2 className="text-3xl font-bold">About Me</h2>
      </motion.div>

      <div className="space-y-8">
        <AnimatedTextCharacter
          charVariants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.004 }}
          charStyle={{ willChange: 'opacity' }}
        >
          <p className="text-lg leading-relaxed">
            I'm a <strong>Full-Stack Developer</strong> with over{' '}
            <strong>two years</strong> of experience in web development. I focus
            on building <strong>clean</strong>, <strong>efficient</strong>, and{' '}
            <strong>responsive</strong> applications while constantly improving
            my skills through real-world projects.{' '}
            <strong className="italic">I enjoy working in a team</strong> and
            taking new challenges.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            My journey in development started in high school when I got into{' '}
            <strong>modding Minecraft</strong>, creating custom modifications
            and clients in <strong>Java</strong>. That early passion led me to
            software development, where I continue to explore and grow.
          </p>
        </AnimatedTextCharacter>

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
              viewport={{ once: true, amount: 0.2 }}
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
  )
}
