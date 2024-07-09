import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import Header from "./components/Header"
import Root from './pages/Root.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Hero from "./components/Hero.jsx"
import ScrollProgress from "./components/ScrollProgress.jsx"

export const ThemeContext = createContext()

export default function App () {
  const [prefersDarkTheme, setPrefersDarkTheme] = useState(true)

  const toggleTheme = () => setPrefersDarkTheme(prev => !prev)  

  useEffect(()=>{
    document.documentElement.classList.toggle('dark')
  }, [prefersDarkTheme])

  return (
    <ThemeContext.Provider value={{prefersDarkTheme, toggleTheme}}>
      <div className="min-h-screen dark:bg-black dark:text-white" >
        <Router>
          {/* <Hero /> */}
          <Header />
          <Routes>
            <Route path='/' element={ <Root/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}