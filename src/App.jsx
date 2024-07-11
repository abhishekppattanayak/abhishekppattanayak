import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Index from "./pages/Index"
import Error404 from "./pages/Error404"

const router = createBrowserRouter([
  {
    path: '/', element: <Index />
  },
  {
    path: '*', element: <Error404 />
  }
])

export default function App () {
  return (
    <RouterProvider router={router} />
  )
}