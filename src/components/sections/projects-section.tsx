import { Briefcase } from 'lucide-react'
import { motion } from 'motion/react'
import { projects } from '@/constants'
import { ProjectCard } from '../common/project-card'

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-18 scroll-mt-18">
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              style={{ willChange: 'transform' }}
              className="last:self-start"
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
  )
}
