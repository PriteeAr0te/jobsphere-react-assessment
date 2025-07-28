import React, { useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import JobList from '../components/ui/jobs/JobList';
import JobDetailsPanel from '../components/JobDetailsPanel';

const Home = () => {
  const isMobile = useIsMobile();
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section className='w-full min-h-screen flex justify-center overflow-x-hidden'>
      <div className={`w-full border max-w-6xl ${isMobile ? 'flex-col' : 'flex'}`}>
        <aside className={`${isMobile ? '' : 'w-2/5 border-r border-br-primary/30'}`}>
          <JobList onSelect={job => {
            if (isMobile) {
              window.location.href = `/jobs/${job.id}`
            } else {
              setSelectedJob(job);
            }
          }}
          />
        </aside>

        {!isMobile && selectedJob && (
          <div className='w-3/5 '>
            <JobDetailsPanel job={selectedJob} />
          </div>
        )}
      </div>
    </section>

  )
}

export default Home