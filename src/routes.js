import { useRoutes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export const path = {
  home: '/',
  about: '/about',
  notfound: '/notfound',
}

const routes = [
  { path: path.home, element: <Home /> },
  { path: path.about, element: <About /> },
  { path: path.notfound, element: <NotFound /> },
  { path: '/*', element: <NotFound /> },
]

const Routes = () => {
  let element = useRoutes(routes)
  return element
}
export default Routes
