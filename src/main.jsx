import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import MenuPage from './components/MenuPage/MenuPage.jsx'
import Shop from './components/Shop/Shop.jsx'
import SignIn from './components/Account/SignIn.jsx'
import SignUp from './components/Account/SignUp.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'


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
        loader: () => fetch('http://localhost:5000/items')
      },
      {
        path: '/shop/:text',
        element: <Shop></Shop>
      },
    ]
  },
  {
    path: '/sign_in',
    element: <SignIn></SignIn>
  },
  {
    path: '/sign_up',
    element: <SignUp></SignUp>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
