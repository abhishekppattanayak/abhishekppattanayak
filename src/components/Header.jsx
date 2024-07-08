import { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import navbarSvg from '../assets/header-bars.svg'
import crossBlackSvg from '../assets/crossBlack.svg'
import crossWhiteSvg from '../assets/crossWhite.svg'
import { ThemeContext } from "../App";
import sunSvg from '../assets/sun.svg'
import moonSvg from '../assets/moon.svg'
import { motion } from "framer-motion";

export default function Header () {
  const bool = window.innerWidth >= 640
  const [disp, setDisp] = useState(bool);

  const sunIcon = useMemo(()=>sunSvg, [])
  const moonIcon = useMemo(()=>moonSvg, [])
  const crossBlackIcon = useMemo(()=>crossBlackSvg, [])
  const crossWhiteIcon = useMemo(()=>crossWhiteSvg, [])

  const {prefersDarkTheme, toggleTheme} = useContext(ThemeContext)
  const [themeIcon, setThemeIcon] = useState(() => prefersDarkTheme?{themeIcon:sunSvg, crossIcon:crossWhiteIcon}:{themeIcon:moonIcon, crossIcon:crossBlackIcon})

  useEffect(()=>{
    setThemeIcon(() => prefersDarkTheme?{themeIcon:sunSvg, crossIcon:crossWhiteIcon}:{themeIcon:moonIcon, crossIcon:crossBlackIcon})
  }, [prefersDarkTheme, sunIcon, moonIcon, crossBlackIcon, crossWhiteIcon])

  useEffect(()=>{
    const handleResize = () => {
      if( window.innerWidth < 640 ) {
        setDisp(false)
      } else {
        setDisp(true)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const links = [
    {to: '/', content: 'Home'},
    {to: '/about', content: 'About'},
    {to: '/resume', content: 'Resume'}
  ]

  return (
      <nav className="sticky top-0 py-2 px-2 dark:bg-black dark:text-white sm:py-4 ">
      {disp ? 
        <ul className="flex flex-col gap-1 sm:flex-row items-center sm:justify-end sm:gap-2 sm:px-4 sm:text-lg md:gap-4 md:px-6 md:text-xl lg:gap-6 lg:px-8 lg:text-2xl dark:bg-black">

          <li className="self-end h-8 sm:hidden">
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={()=>setDisp(false)} className="h-full">
              <img src={themeIcon.crossIcon} className="h-full" alt="" /> 
            </motion.button>
          </li>

          <li className="hidden sm:inline grow font-bold sm:text-xl md:text-2xl lg:text-3xl" >
            <a target="_blank" href="https://www.linkedin.com/in/abhishek-pattanayak/">Abhishek Pattanayak</a>
          </li>

          {links.map((li, index) => 
            <li className="flex content-center hover:bg-neutral-300 dark:hover:bg-neutral-900 rounded-md w-full" key={index}>
              <Link className="h-full text-center w-full" to={li.to}>{li.content}</Link>
            </li>
          )}

          <li>
            {/* theme button */}
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="rounded-md px-2 py-1 h-8 md:h-9 xl:h-10 aspect-video font-bold bg-black dark:bg-white" onClick={toggleTheme} >
              <img className="h-full mx-auto " src={themeIcon.themeIcon} alt=""/>
            </motion.button>
          </li>

        </ul>

      :
      // cross button
        <button 
        className="p-0.5 rounded-sm grid place-content-center aspect-square h-8 border border-black dark:border-white sm:hidden dark:bg-white "
        onClick={()=>setDisp(true)}
        >
        <img src={navbarSvg} alt="" />
        </button> 
      }
      </nav>
  )
}