import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import Header from "./components/Header"

export const ThemeContext = createContext()

export default function App () {
  const [prefersDarkTheme, setPrefersDarkTheme] = useState(true)

  const toggleTheme = () => setPrefersDarkTheme(prev => !prev)

  useEffect(()=>{
    document.documentElement.classList.toggle('dark')
    console.log('hua')
  }, [prefersDarkTheme])

  return (
    <ThemeContext.Provider value={{prefersDarkTheme, toggleTheme}}>
      <div className="min-h-screen dark:bg-black dark:text-white" >
        <Header />
      </div>
    </ThemeContext.Provider>
  )
}