import React, { useEffect, useRef } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";

const SearchBar = ({onFilterTypeSelect, searchTerm, onSearchTermChange }) => {
  const dropdownRef = useRef(null);
    
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
    const dropdown = document.getElementById('filter-dropdown');
    if (dropdown?.open) dropdown.removeAttribute('open');
  };

    return (
        <div className='mt-2 px-2 rounded-xl flex items-center justify-between bg-transparent border border-br-primary/80 focus:border-light-bg/50'>
            <div className='flex gap-2 w-full items-center text-white/80 py-1 border-0 focus:outline-0 mr-8'>
                <span className='w-fit'>
                    <IoSearchOutline size={20} />
                </span>
                <input
                    className='min-w-full py-1 border-0 bg-transparent focus-within:outline-0 active:outline-0'
                    type='text'
                    placeholder='Search Job'
                    name='search'
                    role='search'
                    value={searchTerm}
                    onChange={(e) => onSearchTermChange(e.target.value)}
                    aria-label='Search Job'
                />
            </div>

            <details
                id="filter-dropdown"
                className="relative group w-fit"
                ref={dropdownRef}
                onClick={(e) => e.stopPropagation()}
            >
                <summary className="py-1 px-1 hover:bg-light-bg/10 rounded-lg cursor-pointer list-none focus:outline-none w-fit">
                    <div className='relative'>
                        <IoFilter size={22} />
                    </div>
                </summary>

                <ul className="absolute right-0 mt-2 w-48 bg-primary rounded-md shadow-lg py-1 z-50 border border-br-primary text-white">
                    <li onClick={() => { handleClose(); onFilterTypeSelect('category'); }}
                        className='w-full p-1.5 hover:bg-light-bg/10 cursor-pointer py-1.5'>Category</li>
                    <li onClick={() => { handleClose(); onFilterTypeSelect('experience'); }}
                        className='w-full p-1.5 hover:bg-light-bg/10 cursor-pointer py-1.5'>Experience</li>
                    <li onClick={() => { handleClose(); onFilterTypeSelect('location'); }}
                        className='w-full p-1.5 hover:bg-light-bg/10 cursor-pointer py-1.5'>Location</li>
                    <li onClick={() => { handleClose(); onFilterTypeSelect('job_type'); }}
                        className='w-full p-1.5 hover:bg-light-bg/10 cursor-pointer py-1.5'>Job Type</li>
                </ul>
            </details>
        </div>
    )
}

export default SearchBar