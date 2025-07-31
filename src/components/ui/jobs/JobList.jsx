import { CiBookmark } from "react-icons/ci";
import { getExperienceCategory } from '../../../utils/getExperienceCategory';
import { LiaBanSolid } from "react-icons/lia";
import { getPostedTimeAgo, isExpired } from '../../../utils/dateUtils';
import { getInitials } from '../../../utils/getInitials';
import { GoHome } from "react-icons/go";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
          <div
            key={job.id}
            onClick={() => onSelect(job)}
            className={`p-4 border bg-secondary-bg/70 border-br-primary/60 ${isSelected ? 'dark:border-light-bg/50 border-text-secondary/50' : 'hover:border-text-secondary dark:hover:border-light-bg/50'} transform ease-in duration-300 rounded-lg group cursor-pointer`}>
            <div className='w-full flex justify-between items-center'>
              <div className='flex gap-3 items-start'>
                <div className='w-[45px] min-w-[45px] h-[45px] min-h-[45px] rounded-lg bg-light-bg flex items-center justify-center text-center'>
                  <span
                    className="w-9 h-9 rounded-full text-lg bg-primary text-white pt-1"
                  > 
                  {getInitials(job.company.name)}
                  </span>
                </div>
                <div className='flex flex-col'>
                  <h2 className='lg:text-lg xl:text-[19px] font-medium text-white mb-1.5 group-hover:underline cursor-pointer'> {job.title.length > 30 ? `${job.title.slice(0, 30)}...` : job.title}</h2>

                  <div className='flex gap-1 items-center flex-wrap'>
                    <p className='text-sm text-white/80 italic'>{job.company.name.length > 30 ? `${job.company.name.slice(0, 30)}...` : `${job.company.name}`}</p>

                    <div className='flex gap-1 items-center'>
                      <span> / </span>

                      <p className='text-sm text-white/80 italic mb-1'>
                        {job.company.location}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              <div className='flex flex-col gap-y-2'>
                <button className='cursor-pointer focus:outline-0'>
                  <CiBookmark size={20} />
                </button>
                {isExpired(job.deadline) && (
                  <div className='flex items-center gap-1' title="Application expired">
                    <LiaBanSolid size={18} />
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-start gap-4 flex-wrap sm:justify-start sm:gap-4 md:justify-center md:gap-4 xl:justify-between xl:gap-4 items-stretch mt-4'>
              {job.salary && (
                <>
                  <div className='px-2 py-1.5 rounded-lg bg-btn-bg text-white/70 text-xs lg:text-[15px] items-center'>
                    {job.job_type}
                  </div>
                  <div className='px-2 py-1.5 rounded-lg bg-btn-bg text-white/70 text-xs lg:text-[15px] items-center'>
                    {getExperienceCategory(job.experience)}
                  </div>
                  <div className='px-2 py-1.5 rounded-lg bg-btn-bg text-white/70 text-xs lg:text-[15px] items-center'>
                    {job.salary}
                  </div>
                </>
              )}
            </div>

            <p className='text-sm text-white/70 italic mt-4'>
              {getPostedTimeAgo(job.postedDate)}
            </p>
          </div>
        )
      })}


      {isMobile && (
        <div className='w-full flex justify-center items-center fixed bottom-0 z-50'>
          <div className='w-[95%] rounded-2xl flex items-center justify-evenly text-white p-3 shadow-lg bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300'>

            <Link to="/" className='cursor-pointer'>
              <GoHome size={22} />
            </Link>
            <Link to="/jobs" className='cursor-pointer'>
              <IoBriefcaseOutline size={22} />
            </Link>
            <Link to="/messages" className='cursor-pointer'>
              <BiMessageDetail size={22} />
            </Link>
            <Link to="/profile" className='cursor-pointer'>
              <FaRegUser size={22} />
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default JobList