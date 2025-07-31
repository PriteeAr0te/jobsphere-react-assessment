import { GoHome } from "react-icons/go";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import JobCard from "./JobCard";

const JobList = ({ onSelect, selectedJobId, isMobile, jobs }) => {

  if (!jobs || jobs.length === 0) {
    return (
      <div className="p-4 text-lg text-white/70 text-center">
        No matching jobs found.
      </div>
    );
  }

  return (
    <section className='flex flex-col gap-y-4 relative overflow-x-hidden'>
      {jobs.map(job => {
        const isSelected = job.id === selectedJobId
        return (
          <JobCard isSelected={isSelected} onSelect={onSelect} job={job} />
        )
      })}


      {isMobile && (
        <div className='w-full flex justify-center items-center fixed bottom-0 z-50'>
          <div className='w-[95%] rounded-2xl flex items-center justify-evenly text-white p-3 shadow-lg bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300'>

            <Link to="/" className={`cursor-pointer ${window.location.pathname === '/' ? 'text-gray-700 dark:text-light-bg' : 'text-white/70 hover:text-white'}`}>
              <GoHome size={22} />
              {window.location.pathname === '/' && <div className="w-[5px] mt-1 text-center ml-2 h-[5px] rounded-full bg-light-bg"></div>}
            </Link>
            <Link to="/jobs" className={`cursor-pointer ${window.location.pathname === '/jobs' ? 'text-gray-700 dark:text-light-bg' : 'text-white/70 hover:text-white'}`}>
              <IoBriefcaseOutline size={22} />
              {window.location.pathname === '/jobs' && <div className="w-[5px] mt-1 text-center ml-2 h-[5px] rounded-full bg-light-bg"></div>}
            </Link>
            <Link to="/messages" className={`cursor-pointer ${window.location.pathname === '/message' ? 'text-gray-700 dark:text-light-bg' : 'text-white/70 hover:text-white'}`}>
              <BiMessageDetail size={22} />
              {window.location.pathname === '/message' && <div className="w-[5px] mt-1 text-center ml-2 h-[5px] rounded-full bg-light-bg"></div>}
            </Link>
            <Link to="/profile" className={`cursor-pointer ${window.location.pathname === '/profile' ? 'text-gray-700 dark:text-light-bg' : 'text-white/70 hover:text-white'}`}>
              <FaRegUser size={22} />
              {window.location.pathname === '/profile' && <div className="w-[5px] mt-1 text-center ml-2 h-[5px] rounded-full bg-light-bg"></div>}
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default JobList