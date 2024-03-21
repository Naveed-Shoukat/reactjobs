import React from 'react'
import { useLoaderData } from 'react-router-dom';
import JobDataForm from '../../components/JobDataForm';

const EditJobPage = ({handelJobEditRequest}) => {
    const jobData = useLoaderData();

  return (
    <JobDataForm handleDataOperation={handelJobEditRequest} formTitle={'Update'} initialState={jobData}/>
  )
}

export default EditJobPage