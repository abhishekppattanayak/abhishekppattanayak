import { motion, useScroll } from "framer-motion"

export default function ScrollProgress( ) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div style={{scaleX: scrollYProgress}} className="h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full "></motion.div>
  )
}