import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import MenuPage from './components/MenuPage/MenuPage.jsx'
import Shop from './components/Shop/Shop.jsx'
import SignIn from './components/Account/SignIn.jsx'
import SignUp from './components/Account/SignUp.jsx'
import AuthProvider, { AuthContex } from './components/AuthProvider/AuthProvider.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Carts from './components/Carts/Carts.jsx'
import UserHome from './components/UserHome/UserHome.jsx'
import Private from './components/Private/Private.jsx'
import AllUsers from './components/AllUsers/AllUsers.jsx'
import PrivateAdmin from './components/PrivateAdmin/PrivateAdmin.jsx'

const queryClient = new QueryClient()




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
  {
    path: '/dashboard',
    element: <Private><Dashboard></Dashboard></Private>,
    children: [
      {
        path: '/dashboard/user_home',
        element: <UserHome></UserHome>
      },
      {
        path: '/dashboard/carts',
        element: <Carts></Carts>
      },
      {
        path: '/dashboard/all_users',
        element: <PrivateAdmin><AllUsers></AllUsers></PrivateAdmin>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
