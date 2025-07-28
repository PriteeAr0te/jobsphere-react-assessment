import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (

    <div className='w-screen min-h-screen bg-primary text-white overflow-x-hidden'>
      <Header />

      <main className='pb-10 pt-[30px] overflow-x-hidden'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout