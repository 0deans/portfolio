import { Briefcase, Send } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { DuolingoWidget } from '../common/duolingo-widget'
import { Button } from '../ui/button'

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
        style={{ willChange: 'transform' }}
        className="noise-bg flex h-full flex-col rounded-md border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800/30"
      >
        <div className="mb-2 flex items-center gap-3">
          <Briefcase className="text-primary size-6 flex-shrink-0" />{' '}
          <h2 className="text-card-foreground flex-grow text-lg font-semibold">
            {t('hero.seekingOpportunities')}
          </h2>
          <span className="relative flex h-3 w-3 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
        </div>
        <p className="text-muted-foreground mb-4 flex-grow text-sm text-balance">
          {t('hero.seekingDescription')}
        </p>
        <div className="mt-auto">
          <Button variant="outline" size="sm" asChild>
            <a href="#contact">
              <Send className="h-4 w-4" />
              {t('hero.getInTouch')}
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
        viewport={{ once: true, amount: 0.2 }}
        style={{ willChange: 'transform' }}
      >
        <DuolingoWidget username="0dean" />
      </motion.div>
    </div>
  )
}
