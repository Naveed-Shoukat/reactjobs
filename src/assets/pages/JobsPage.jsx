import React from 'react'
import JobListings from '../../components/JobListings'

const JobsPage = () => {
  return (
    <React.Fragment>
      <section className='bg-blue-50 px-4 py-6'>
        <JobListings />
      </section>
    </React.Fragment>
  )
}

export default JobsPage