import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './pages/Error.jsx'
import About from './pages/About.jsx'
import Hero from './components/Hero.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '*',
    element: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      {/* <Hero /> */}
      <RouterProvider router={router} />
    </>
  </React.StrictMode>,
)
