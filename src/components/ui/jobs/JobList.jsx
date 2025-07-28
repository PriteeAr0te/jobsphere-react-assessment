import React from 'react'
import jobsData from '../../../data/jobs.json';

const JobList = ({ onSelect }) => {
  const jobs = jobsData.jobs;
  
  return (
    <section className='divide-y'>
      {jobs.map(job => (
        <div key={job.id} onClick={() => onSelect(job)} className='p-4 hover:bg-slate-700 cursor-pointer'>
          <h3 className='text-lg font-semibold'>{job.title}</h3>
          <p className='text-sm text-slate-400'>{job.company} • {job.location}</p>
        </div>
      ))}
    </section>
  )
}

export default JobList