import React from 'react'
import { FiMenu } from "react-icons/fi";
import Logo from '../../assets/img/jobsphere.png'

const Header = () => {
  return (
    <header className='w-full bg-secondary-bg md:py-3 py-2 text-white px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <span className='text-white'>
          <img src={Logo} width={40} className='rounded-full' alt='JobSphere'/>
        </span>
        <h2 className='text-xl font-medium tracking-wide'>
            JobSpeher
        </h2>
      </div>
      <button className='cursor-pointer block md:hidden text-white p-1.5 rounded-md hover:bg-secondary-bg'>
        <FiMenu size={18} />
      </button>
    </header>
  )
}

export default Header