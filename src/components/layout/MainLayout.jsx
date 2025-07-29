import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (

    <div className='w-screen dark:bg-primary text-white'>
      <Header />

      <main className='pb-4 pt-[30px]'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout