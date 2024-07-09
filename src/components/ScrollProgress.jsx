import { motion, useScroll } from "framer-motion"

export default function ScrollProgress( ) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div style={{scaleX: scrollYProgress}} className="h-1 mt-4 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full "></motion.div>
  )
}