import { useCallback, useEffect, useMemo, useRef } from "react"
import emailIcon from '../assets/email.png'
import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'

export default function Introduction() {
  
  const name = useRef(null)

  const typePhrase = useCallback((phrase, ref) => {
    let keys = []
    for (let i = 0; i < phrase.length; ++i) {
      keys.push(setTimeout(() => ref.current.innerText += phrase[i], i * 50))
    }
    return keys
  }, [])

  useEffect(() => {
    name.current.innerText = ''
    const keys = typePhrase(' Abhishek Pattanayak', name)
    return () => keys.forEach(key => clearTimeout(key))
  }, [typePhrase])

  const links = useMemo(() => [
    {href: 'mailto:2021.abhishek.pattanayak@ves.ac.in', src: emailIcon, alt: 'mail'},
    {href: 'https://www.linkedin.com/in/abhishek-pattanayak-00115224a/', src: linkedinIcon, alt: 'linkedin'},
    {href: 'https://github.com/abhishekppattanayak/', src: githubIcon, alt: 'github'},
  ], [])

  return (
    <main className="h-screen grid place-content-center px-4 ">
      <a href="https://www.linkedin.com/in/abhishek-pattanayak-00115224a/" className="font-mono font-bold text-4xl inline">
        Hi! I am<pre className="bg-gradient-to-r text-5xl from-indigo-500 via-cyan-500 to-emerald-500 text-transparent bg-clip-text w-fit text-wrap inline " ref={name}></pre>.
      </a>
      <ul className="flex items-center gap-2" >
        {links.map((link, index) => 
          <li key={index} className="h-8">
            <a href={link.href} className="text-xl">
              <img className="h-full" src={link.src} alt={link.alt} />
            </a>
          </li>
        )}
      </ul>
    </main>
  )
}