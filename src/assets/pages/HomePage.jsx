import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import HomeCareds from '../../components/HomeCareds'
import ViewAllJobs from '../../components/ViewAllJobs'
import HomePageJobListings from '../../components/HomePageJobListings'

const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <HomeCareds />
      <HomePageJobListings />
      <ViewAllJobs />
    </React.Fragment>
  )
}

export default HomePage