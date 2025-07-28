import React from 'react'

const JobDetailsPanel = ({ job }) => {
  if (!job) {
    return (
      <p>Select a job to view details.</p>
    )
  }

  return (
    <section className='p-4'>
      <h2 className='text-xl font-bold'>
        {job.title}
      </h2>
      <p className='text-sm text-slate-400'>{job.company} • {job.location}</p>
      <p className='mt-4'>{job.description}</p>
    </section>
  )
}

export default JobDetailsPanel