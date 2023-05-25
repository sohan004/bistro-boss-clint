import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useNavigation } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import { BeatLoader } from 'react-spinners';

function App() {
  const navigation = useNavigation()

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Nav></Nav>
      {navigation.state === 'loading' ? <div className='text-center my-36'>
        <BeatLoader color="#36d7b7" />
      </div> : <Outlet></Outlet>}

    </div>
  )
}

export default App
