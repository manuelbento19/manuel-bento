'use client'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ReadingBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden
      className='fixed top-0 left-0 z-[60] h-[3px] w-full origin-left bg-primary'
      style={{ scaleX }}
    />
  )
}