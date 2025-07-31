import { getInitials } from '../../../utils/getInitials'
import { getPostedTimeAgo, isExpired } from '../../../utils/dateUtils'
import { getExperienceCategory } from '../../../utils/getExperienceCategory'
import { CiBookmark } from 'react-icons/ci'

const JobCard = ({job, onSelect, isSelected}) => {
  return (
    <div
      onClick={() => onSelect(job)}
      className={`p-4 border bg-secondary-bg/70 border-br-primary/60 ${isSelected ? 'dark:border-light-bg/50 border-text-secondary/50' : 'hover:border-text-secondary dark:hover:border-light-bg/50'} transform ease-in duration-300 rounded-lg group cursor-pointer`}>
      <div className='w-full flex justify-between items-start'>
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
        <div className='flex flex-col gap-y-2 ml-2'>
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

      <div className='flex justify-start gap-4 flex-wrap sm:justify-start sm:gap-4 md:justify-around md:gap-4 xl:justify-between xl:gap-4 items-stretch mt-4'>
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
}

export default JobCard