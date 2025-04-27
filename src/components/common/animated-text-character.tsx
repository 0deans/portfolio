import { motion, Transition, Variants } from 'motion/react'
import React from 'react'
import { splitStringRegex } from '@/lib/utils'

interface AnimatedTextCharacterProps {
  children: React.ReactNode
  className?: string
  charStyle?: React.CSSProperties
  charVariants: Variants
  containerVariants?: Variants
  transition: Transition
  initial: string
  whileInView: string
  viewport?: { once: boolean; amount: number }
  splitter?: (text: string) => string[]
}

function processChildren(
  children: React.ReactNode,
  charVariants: Variants,
  splitterFn: (text: string) => string[],
  charStyle?: React.CSSProperties
): React.ReactNode {
  return React.Children.map(children, (child, index) => {
    if (typeof child === 'string') {
      return splitterFn(child).map((char, index) => (
        <motion.span key={index} variants={charVariants} style={charStyle}>
          {char}
        </motion.span>
      ))
    }

    if (React.isValidElement(child)) {
      const children = (child.props as { children: React.ReactNode }).children

      return React.cloneElement(
        child,
        { key: index },
        processChildren(children, charVariants, splitterFn, charStyle)
      )
    }

    return child
  })
}

export function AnimatedTextCharacter({
  children,
  className,
  charStyle,
  charVariants,
  containerVariants,
  transition,
  initial,
  whileInView,
  viewport,
  splitter = (text: string) => splitStringRegex(text)
}: AnimatedTextCharacterProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {processChildren(children, charVariants, splitter, charStyle)}
    </motion.div>
  )
}
