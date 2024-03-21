import React from 'react'
import JobDataForm from '../../components/JobDataForm';

const AddJobPage = ({ handelJobPostRequest }) => {
  return (
    <JobDataForm handleDataOperation={handelJobPostRequest} formTitle={'Add'}/>
  )
}

export default AddJobPage