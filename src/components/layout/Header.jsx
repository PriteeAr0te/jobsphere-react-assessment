import React, { useEffect, useRef } from 'react'
import { FiMenu } from "react-icons/fi";
import Logo from '../../assets/img/jobsphere.png'
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";
import Profile from '../../assets/img/profile.png'
import useDarkMode from '../../hooks/useDarkMode';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const dropdownRef = useRef(null);
  const [darkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dropdownRef.current.removeAttribute('open');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);


  const handleClose = () => {
    const dropdown = document.getElementById('profile-dropdown');
    if (dropdown?.open) dropdown.removeAttribute('open');
  };

  return (
    <header className='w-full bg-primary shadow-md border-b border-secondary-bg/80 md:py-3 py-2 text-white px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <button className='cursor-pointer block md:hidden text-white p-1.5 rounded-md hover:bg-secondary-bg'>
          <FiMenu size={18} />
        </button>
        <Link to='/' className='flex gap-2 items-center'>
          <span className='text-white w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]'>
            <img src={Logo} width={40} className='rounded-full' alt='JobSphere' />
          </span>
          <h2 className='text-lg sm:text-xl font-medium tracking-wide'>
            JobSpeher
          </h2>
        </Link>
      </div>
      <div className='flex gap-2 sm:gap-3 items-center'>
        <button className='cursor-pointer'>
          <span className='relative'>
            <IoMdNotificationsOutline size={22} />
            <span className='absolute text-white -top-3 right-0.5 '> 0 </span>
          </span>
        </button>
        <details
          id="profile-dropdown"
          className="relative group"
          ref={dropdownRef}
          onClick={(e) => e.stopPropagation()}
        >
          <summary className="cursor-pointer flex items-center list-none focus:outline-none">
            <div className='relative'>
              <img
                className="h-9 w-9 rounded-full border border-br-primary"
                src={Profile}
                alt="Profile"
              />
            </div>
          </summary>

          <ul className="absolute right-0 mt-2 w-48 bg-primary rounded-md shadow-lg py-1 z-50 border border-br-primary text-white">
            <Link
              to='/myprofile'
              onClick={handleClose}
              className='py-2 px-4 text-sm text-white cursor-pointer flex gap-2 items-center hover:bg-secondary-bg'
            >
              <span><CgProfile size={18}/></span>
              <span
                className=""
              >
                My Profile
              </span>
            </Link>
            <button
              onClick={toggleDarkMode}
              className='py-2 px-4 w-full text-sm text-white cursor-pointer flex gap-2 items-center hover:bg-secondary-bg'
            >
              <span>{darkMode ? <MdOutlineDarkMode size={18}/> : <MdDarkMode size={18}/>}</span>
              <span>
                {darkMode ? 'Light' : 'Dark'}
              </span>
            </button>
          </ul>
        </details>
      </div>

    </header>
  )
}

export default Header