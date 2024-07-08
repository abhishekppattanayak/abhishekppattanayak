import { useEffect, useState } from 'react'
import '../assets/Hero.css'
import { motion } from 'framer-motion'

export default function Hero() {
  const [disp, setDisp] = useState(true)
  const roles = ['Fullstack Developer', 'AI & ML Engineer']

  useEffect(()=>{
    const key = setTimeout(()=>{
      setDisp(false)
    }, 5000)
    return ()=>clearTimeout(key)
  }, [])

  return (
    disp &&
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4 overflow-hidden hide dark:bg-black dark:text-white ">
      <h1 className="text-center flex flex-wrap text-2xl sm:text-3xl">Abhishek Pattanayak</h1>
      <ul className='flex flex-col justify-center items-center text-xl sm:text-2xl'>
      {roles.map((li, index) =>
        <motion.li animate={{x:50*(index+1)}} transition={{delay: 1}}  key={index}>{li}</motion.li>
      )}
      </ul>
    </div>
    
  )
}