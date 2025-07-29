import jobsData from '../../../data/jobs.json';
import { CiBookmark } from "react-icons/ci";
import { getExperienceCategory } from '../../../utils/getExperienceCategory';
import { LiaBanSolid } from "react-icons/lia";
import { getPostedTimeAgo, isExpired } from '../../../utils/dateUtils';
import { getInitials } from '../../../utils/getInitials';

const JobList = ({ onSelect, selectedJobId }) => {
  const jobs = jobsData.jobs;

  // const renderLocation = (job) => {
  //   const loc = job.job_location.toLowerCase()
  //   if (loc === 'onsite' || loc === 'hybrid') {
  //     return `${job.job_location} - ${job.company_location}`
  //   }
  //   return job.job_location
  // }


  return (
    <section className='flex flex-col gap-y-4'>
      {jobs.map(job => {
        const isSelected = job.id === selectedJobId
        return (
          <div
            key={job.id}
            onClick={() => onSelect(job)}
            className={`p-4 border border-br-primary/60 ${isSelected ? 'border-light-bg' : 'hover:border-light-bg'} transform ease-in duration-300 rounded-lg group cursor-pointer`}>
            <div className='w-full flex justify-between items-center'>
              <div className='flex gap-3 items-center'>
                <div className='w-[45px] h-[45px] rounded-lg bg-light-bg flex items-center justify-center'>
                  <img
                    src={`${job.company_logo_url}${getInitials(job.company_name)}`}
                    alt={job.company_name}
                    className="w-9 h-9 rounded-full"
                  />
                </div>
                <div className='flex flex-col'>
                  <h2 className='lg:text-lg xl:text-[19px] font-medium text-white mb-1.5 group-hover:underline cursor-pointer'> {job.title.length > 30 ? `${job.title.slice(0, 30)}...` : job.title}</h2>

                  <div className='flex gap-1 items-center'>
                    <p className='text-sm text-white/80 italic mb-1'>{job.company_name.length > 35 ? `${job.company_name.slice(0, 35)}...` : `${job.company_name}`}</p>

                    <span> / </span>

                    <p className='text-sm text-white/80 italic mb-1'>
                      {job.company_location.city}
                    </p>
                  </div>

                </div>
              </div>
              <div className='flex flex-col gap-y-2'>
                <button className='cursor-pointer focus:outline-0'>
                  <CiBookmark size={20} />
                </button>
                {isExpired(job.application_deadline) && (
                  <div className='flex items-center gap-1' title="Application expired">
                    <LiaBanSolid size={18} />
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-between sm:justify-start sm:gap-4 md:justify-center md:gap-4 xl:justify-between xl:gap-4 items-center mt-4'>
              {job.salary_range && (
                <>
                  <div className='px-2 py-1.5 rounded-lg bg-btn-bg text-white/70 text-[15px] items-center'>
                    {job.job_type}
                  </div>
                  <div className='px-2 py-1.5 rounded-lg bg-btn-bg text-white/70 text-[15px] items-center'>
                    {getExperienceCategory(job.experience_level)}
                  </div>
                  <div className='px-2 py-1.5 rounded-lg bg-btn-bg text-white/70 text-[15px] items-center'>
                    {job.salary_range}
                  </div>
                </>
              )}
            </div>

            <p className='text-sm text-white/70 italic mt-4'>
              {getPostedTimeAgo(job.posted_date)}
            </p>
          </div>
        )
      })}
    </section>
  )
}

export default JobList