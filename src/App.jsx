import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './assets/pages/HomePage'
import JobsPage from './assets/pages/JobsPage'
import AddJobPage from './assets/pages/AddJobPage'
import MainLayout from './layouts/MainLayout'
import NotFounPage from './assets/pages/NotFoundPage'
import JobPage, { jobLoader } from './assets/pages/JobPage'
import EditJobPage from './assets/pages/EditJobPage'


const App = () => {
  // Handling New Job Addition to the backend through API fetch-Post call
  const handelJobPostRequestToAPI = async (newJobData) => {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newJobData)
    });

    return;
  }

  // Handling Job Updation to the backend through API fetch-Put call
  const handelJobEditRequestToAPI = async (updatedJobData) => {
    const response = await fetch(`/api/jobs/${updatedJobData.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedJobData)
    });
    return;
  }

  // Handling Job Deletion request through backend API fetch-delete call
  const handelJobDeleteRequestToAPI = async (jobId) => {
    const response = await fetch(`/api/jobs/${jobId}`, {
      method: 'DELETE',
    });

    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage handelJobDeleteRequest={handelJobDeleteRequestToAPI} />} loader={jobLoader}/>
        <Route path='/edit-job/:id' element={<EditJobPage handelJobEditRequest={handelJobEditRequestToAPI} />} loader={jobLoader}/>
        <Route path='/add-job' element={<AddJobPage  handelJobPostRequest={handelJobPostRequestToAPI} />} />
        <Route path='*' element={<NotFounPage />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App