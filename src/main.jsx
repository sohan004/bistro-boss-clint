import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import MenuPage from './components/MenuPage/MenuPage.jsx'
import Shop from './components/Shop/Shop.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <MenuPage></MenuPage>,
        loader: () => fetch('/menu.json')
      },
      {
        path: '/shop/:text',
        element: <Shop></Shop>,
        loader: () => fetch('/menu.json')
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
