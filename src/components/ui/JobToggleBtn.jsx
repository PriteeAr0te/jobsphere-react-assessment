import React from 'react'

const JobToggleBtn = ({ activeTab, setActiveTab }) => {
  return (
    <section className='rounded-2xl bg-secondary-bg text-sm lg:text-base font-medium mt-5 text-white flex w-3/4 md:w-3/5 2xl:w-1/2 transition-all duration-300'>
      <button
        onClick={() => setActiveTab('details')}
        className={`w-1/2 pl-2 py-2 ${activeTab === 'details' ? 'bg-light-bg text-gray-800 dark:text-primary font-semibold' : ''} cursor-pointer focus:outline-0 rounded-l-2xl transition-all duration-300`}>
        Job Details
      </button>
      <button
        onClick={() => setActiveTab('about')}
        className={`w-1/2 pr-2 pl-1 py-2 ${activeTab === 'about' ? 'bg-light-bg text-gray-800 dark:text-primary font-semibold' : ''} cursor-pointer focus:outline-0 rounded-r-2xl transition-all duration-300`}>
        About Company
      </button>
    </section>
  )
}

export default JobToggleBtn