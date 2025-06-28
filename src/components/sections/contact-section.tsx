import { ExternalLink, Send, Wand2 } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { contactInfo } from '@/constants'

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="mt-18 scroll-mt-18">
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
        <Send className="text-primary h-6 w-6" />
        <h2 className="text-3xl font-bold">{t('sections.contact')}</h2>
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
            viewport={{ once: true, amount: 0.2 }}
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
                <h3 className="text-lg font-medium">{contact.platform}</h3>
                <p className="text-muted-foreground text-sm">{contact.value}</p>
              </div>
              <ExternalLink className="text-muted-foreground absolute top-4 right-4 h-4 w-4 opacity-100 transition-opacity group-hover:opacity-100 md:top-1/2 md:-translate-y-1/2 md:opacity-0" />
            </motion.div>
          </motion.a>
        ))}
        <motion.div
          className="hidden sm:block"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: contactInfo.length * 0.1 }}
          style={{ willChange: 'transform' }}
        >
          <motion.div
            whileHover={{ rotate: '-1.5deg', scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform' }}
            className="border-primary/20 bg-primary/5 group relative flex h-full cursor-default items-center rounded-md border p-4 transition-colors"
          >
            <div className="animate-gradient-pan mr-4 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_200%] p-3">
              <Wand2 className="h-6 w-6 text-white" />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-medium">
                {t('socialPlaceholder.title')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('socialPlaceholder.subtitle')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
