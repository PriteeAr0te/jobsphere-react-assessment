import React, { useState } from 'react'
import { getInitials } from '../utils/getInitials'
import { getExperienceCategory } from '../utils/getExperienceCategory'
import JobToggleBtn from './ui/JobToggleBtn'
import ReactMarkdown from 'react-markdown'

const JobDetailsPanel = ({ job }) => {
  const [activeTab, setActiveTab] = useState('details')

  if (!job) {
    return (
      <p>Select a job to view details.</p>
    )
  }

  return (
    <section className='p-4 py-6 border border-br-primary/60 rounded-lg w-full min-h-full md:h-full justify-center mb-2'>
      <div className='w-full h-fit flex flex-col justify-center items-center gap-y-4 bg-primary z-10 pb-3'>
        <div className='w-[45px] h-[45px] rounded-lg bg-light-bg flex items-center justify-center'>
          <img
            src={`${job.company.logo}${getInitials(job.company.name)}`}
            alt={job.company.name}
            className="w-9 h-9 rounded-full"
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-xl capitalize xl:text-2xl text-center font-medium'>{job.title}</h2>
          <div className='flex gap-1 items-center justify-center'>
            <p className='text-sm text-white/80 italic mb-1 text-center'>{job.company.name}</p>

            <span> / </span>

            <p className='text-base text-white/80 font-light italic'>
              {job.location || 'Unknown City'}
              {job.location ? `, ${job.location}` : ''}
            </p>
          </div>

          <p className='text-lg text-white text-center'>{job.salary}</p>

          <div className='flex justify-center gap-4 items-center mt-2'>
            {job.salary && (
              <>
                <div className='px-2 py-1.5 rounded-lg bg-secondary-bg text-white text-center text-xs md:text-sm lg:text-[15px] items-center'>
                  {getExperienceCategory(job.experience)}
                </div>
                <div className='px-2 py-1.5 rounded-lg bg-secondary-bg text-white text-center text-xs md:text-sm lg:text-[15px] items-center'>
                  {job.job_type}
                </div>
                <div className='px-2 py-1.5 rounded-lg bg-secondary-bg text-white text-center text-xs md:text-sm lg:text-[15px] items-center'>
                  {job.salary}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className='w-full md:h-[calc(100vh-350px)] lg:h-[calc(100vh-310px)] xl:h-[calc(100vh-300px)] overflow-y-scroll scrollable-container'>
        <section className='w-full flex justify-center items-center'>
          <JobToggleBtn activeTab={activeTab} setActiveTab={setActiveTab} />
        </section>

        <section className='mt-6 md:mt-5 px-1 sm:px-2 transition-all duration-300 ease-in-out w-full'>
          {activeTab === 'details' ? (
            <div className='fade-in'>
              <div className='prose prose-invert markdoun-text text-white/80'>
              <h4 className='text-xl font-semibold text-white/80 pb-2'>Job Description</h4>
                <ReactMarkdown>
                  {job.jobDescription}
                </ReactMarkdown>
              </div>

              <div className='mt-4'>
                <p className='text-white font-semibold mb-2'>Job Responsibilities</p>
                <ul className="list-disc list-inside text-white/80">
                  {job.responsibilities?.map((resp, index) => (
                    <li
                      key={index}
                      className="px-2 py-1 text-white/80"
                    >
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-4'>
                <p className='text-white font-semibold mb-2'>Job Requirements</p>
                <ul className="list-disc list-inside text-white/80">
                  {job.requirements?.map((req, index) => (
                    <li
                      key={index}
                      className="px-2 py-1 text-white/80"
                    >
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-4'>
                <p className='text-white font-semibold mb-2'>Skills Required</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium bg-btn-bg text-white/80 rounded-full shadow-sm transition-all duration-200 flex gap-2 items-center"
                    >
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className='w-full mt-4  flex flex-col gap-y-3'>
                <p className='w-full text-left text-white/80'>
                  <span className='font-semibold'>
                    Posted Date:
                  </span>
                  <span className='pl-2'>{job.postedDate}</span>
                </p>
                <p className='w-full text-left text-white/80'>
                  <span className='font-semibold'>
                    Application Deadline:
                  </span>
                  <span className='pl-2'>{job.deadline}</span>
                </p>
                <p className='w-full text-left text-white/80'>
                  <span className='font-semibold'>
                    Education Qualification:
                  </span>
                  <span className='pl-1'>{job.education}</span>
                </p>
              </div>
            </div>
          ) : (
            <div className='fade-in'>
              <div className='prose prose-invert markdoun-text text-white/80'>
                <ReactMarkdown>
                  {job.aboutCompany}
                </ReactMarkdown>
              </div>
              <p className='text-white text-left mt-4'>
                <span className='font-semibold pr-1'>Visit: </span>
                <a href={job.company.website} target='_blank' rel='noopener noreferrer' className='text-blue-400 underline'>{job.company.website}</a>
              </p>
              <p className='mt-2 text-white/80'><span className='text-white font-semibold pr-1'>Location:</span> {job.company.location}</p>
              <p className='mt-1 text-white/80'><span className='text-white font-semibold pr-1'> Industry: </span>{job.industry}</p>

              <p className='text-white mt-1 font-semibold mb-2'>Benefits</p>
              <div className="flex flex-wrap gap-2">
                {job.benefits?.map((benefit, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-btn-bg text-white/80 rounded-full shadow-sm transition-all duration-200 flex gap-2 items-center"
                  >
                    <span className='w-[4px] h-[4px] rounded-full bg-white'></span>
                    <span>{benefit}</span>
                  </span>
                ))}
              </div>

            </div>
          )}
        </section>
      </div>

    </section>
  )
}

export default JobDetailsPanel