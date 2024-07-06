import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [disp, setDisp] = useState(true)
  const roles = ['Fullstack Developer', 'AI & ML Engineer']

  useEffect(()=>{
    const key = setTimeout(()=>{
      setDisp(false)
    }, 5000)
    return ()=>clearTimeout(key)
  }, [])

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('prefersDarkTheme'))) {
      document.documentElement.classList.add('dark')
    }
    return () => {}
  }, [])

  return (
    disp &&
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4 overflow-hidden hide dark:bg-black dark:text-white ">
      <h1 className="text-center flex flex-wrap text-2xl sm:text-3xl">Abhishek Pattanayak</h1>
      <ul className='flex flex-col justify-center items-center text-xl sm:text-2xl'>
      {roles.map((li, index) =>
        <li key={index}>{li}</li>
      )}
      </ul>
    </div>
    
  )
}