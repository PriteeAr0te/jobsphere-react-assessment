import React, { useEffect, useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import JobList from '../components/ui/jobs/JobList';
import JobDetailsPanel from '../components/JobDetailsPanel';
import jobsData from '../data/jobs.json';

const Home = () => {
  const isMobile = useIsMobile();
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (!isMobile && jobsData.jobs?.length) {
      setSelectedJob(jobsData.jobs[0])
    }
  }, [isMobile])

  return (
    <section className='w-full min-h-screen flex justify-center overflow-x-hidden'>
      <div className={`w-full max-w-6xl ${isMobile ? 'flex-col' : 'flex'}`}>
        <aside className={`${isMobile ? '' : 'w-2/5 xl:w-1/3'}`}>
          <JobList
            selectedJobId={selectedJob?.id}
            onSelect={job => {
              if (isMobile) {
                window.location.href = `/jobs/${job.id}`
              } else {
                setSelectedJob(job);
              }
            }}
          />
        </aside>

        {!isMobile && selectedJob && (
          <div className='w-3/5 xl:w-2/3 md:pl-6 xl:pl-8 relative'>
            <div className='sticky top-4'>
              <div className='h-[calc(100vh)] overflow-hidden rounded-lg'>
                <JobDetailsPanel job={selectedJob} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>

  )
}

export default Home