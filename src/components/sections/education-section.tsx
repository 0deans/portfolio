import { GraduationCap } from 'lucide-react'
import { motion } from 'motion/react'
import { education } from '@/constants'

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-18">
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
                viewport={{ once: true, amount: 0.2 }}
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
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                style={{ willChange: 'transform' }}
                className="flex flex-col"
              >
                <span className="text-muted-foreground mb-1 text-sm">
                  {edu.period}
                </span>
                <h3 className="text-lg font-medium">{edu.degree}</h3>
                {edu.institution && (
                  <p className="text-muted-foreground">{edu.institution}</p>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
