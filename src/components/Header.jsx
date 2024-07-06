import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navbarSvg from '../assets/header-bars.svg'
import crossSvg from '../assets/cross.svg'
import { ThemeContext } from "../App";
import sunSvg from '../assets/sun.svg'
import moonSvg from '../assets/moon.svg'

export default function Header () {
  const bool = window.innerWidth >= 640
  const [disp, setDisp] = useState(bool);

  const {prefersDarkTheme, toggleTheme} = useContext(ThemeContext)
  const [themeIcon, setThemeIcon] = useState(() => prefersDarkTheme?sunSvg:moonSvg)
  
  useEffect(()=>{
    setThemeIcon(() => prefersDarkTheme?sunSvg:moonSvg)
  }, [prefersDarkTheme])

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
  ]

  return (
      <nav className="sticky top-0 py-2 px-2 dark:bg-black dark:text-white sm:py-4 ">
      {disp ? 
        <ul className="flex flex-col sm:flex-row items-center sm:justify-end sm:gap-2 sm:px-4 sm:text-lg md:gap-4 md:px-6 md:text-xl lg:gap-6 lg:px-8 lg:text-2xl dark:bg-black">

          <li className="self-end sm:hidden">
            <button onClick={()=>setDisp(false)} className="dark:bg-white h-full rounded-md">
              <img src={crossSvg} className="h-full" alt="" /> 
            </button>
          </li>

          {/* {links.map((li, index) => 
            <li className="flex content-center" key={index}>
              <Link className="h-full" to={li.to}>{li.content}</Link>
            </li>
          )} */}

          <li>
            {/* theme button */}
            <button className="rounded-md px-2 py-1 h-8 md:h-10 xl:h-12 font-bold" onClick={toggleTheme}>
              <img className="h-full" src={themeIcon} alt="" />
            </button>
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