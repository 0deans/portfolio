import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { DuolingoWidget } from '../common/duolingo-widget'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          willChange: 'transform',
          backgroundImage: `
            linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%),
            url('/cat.svg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="relative flex h-full flex-col items-start justify-start rounded-md border border-zinc-200 bg-[#fffdf8] p-4 dark:border-zinc-700"
      >
        <p className="text-sm font-medium whitespace-pre-line text-white drop-shadow-lg">
          {t('hero.catMotto')}
        </p>
      </motion.section>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ willChange: 'transform' }}
      >
        <DuolingoWidget username="0dean" />
      </motion.div>
    </div>
  )
}
