import React from 'react'
import { useState } from 'react'
import JobListings from './JobListings'
import LoadMoreJobs from './LoadMoreJobs'

const HomePageJobListings = () => {
  const [jobLoadCount, setJobLoadCount] = useState(3);
  const [maxJobCount, setMaxJobCount] = useState(0);

  const isLoadMoreJob = jobLoadCount <= maxJobCount;

  const handleMoreJobsBtn = () => {
    setJobLoadCount(prevState => prevState + 3)
  }
  return (
    <React.Fragment>
        <JobListings jobLoadCount={jobLoadCount} setMaxJobCount={setMaxJobCount}/>
        <LoadMoreJobs isLoadMoreJob={isLoadMoreJob} handleMoreJobsBtn={handleMoreJobsBtn}/>
    </React.Fragment>
  )
}

export default HomePageJobListings