import { User } from 'lucide-react'
import { motion } from 'motion/react'
import { Trans, useTranslation } from 'react-i18next'
import { getAboutDetails } from '@/constants'

const components = {
  bold: <strong />,
  italic: <strong className="italic" />
}

export function AboutSection() {
  const { t } = useTranslation()
  const aboutDetails = getAboutDetails(t)

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
        <h2 className="text-3xl font-bold">{t('sections.aboutMe')}</h2>
      </motion.div>

      <div className="space-y-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ willChange: 'transform' }}
          className="space-y-4"
        >
          <p className="text-lg leading-relaxed">
            <Trans i18nKey="about.p1" components={components} />
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            <Trans i18nKey="about.p2" components={components} />
          </p>
        </motion.div>

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
              <detail.icon className="text-muted-foreground mt-0.5 h-5 w-5 min-w-5" />
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
