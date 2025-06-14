import { Code } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { getSkillCategories } from '@/constants'

export function SkillsSection() {
  const { t } = useTranslation()
  const skillCategories = getSkillCategories(t)

  return (
    <section id="skills" className="scroll-mt-18">
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
        <Code className="text-primary h-6 w-6" />
        <h2 className="text-3xl font-bold">{t('sections.skills')}</h2>
      </motion.div>

      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
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
                  viewport={{ once: true, amount: 0.2 }}
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
  )
}
