import React from 'react'
import { useParams } from 'react-router-dom'
import jobsData from '../data/jobs.json'
import JobDetailsPanel from '../components/JobDetailsPanel';

const JobDetails = () => {
  const jobs = jobsData;
  const {id} = useParams();
  const job = jobs.find(j => j.id.toString() === id)

  return (
    <section className='p-2 sm:p-6'>
      <JobDetailsPanel job={job}/>
    </section>
  )
}

export default JobDetails