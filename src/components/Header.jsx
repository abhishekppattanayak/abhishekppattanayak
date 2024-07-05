import { Link } from "react-router-dom";


export default function Header () {
  const links = [
    {to: '/', content: 'Home'},
    {to: '/about', content: 'About'},
  ]
  return (
    <nav>
      <ul>
        {links.map((li, index) => 
          <Link key={index} to={li.to}>{li.content}</Link>
        )}
      </ul>
    </nav>
  )
}