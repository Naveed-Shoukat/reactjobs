import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';
import spnner from '../components/Spinner'
import JobListing from './JobListing';
import Spinner from '../components/Spinner';

const JobListings = ({ jobLoadCount=-1, setMaxJobCount=-1 }) => {
    const [state, setState] = useState({
        jobs: [],
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/api/jobs');
                const jobsData = await response.json();
                
                setMaxJobCount !== -1 && setMaxJobCount(jobsData.length);

                setState(prevState => ({
                    jobs: jobsData,
                }))
            } catch (error) {
                alert('Error fetching Data from API', error)
                
                setState(prevState => ({
                    ...prevState,
                    error: error,
                }))                
            } 
            finally {
                setState(prevState => ({
                    ...prevState, 
                    isLoading: false
                }))
            }
        }

        fetchJobs();
    }, [])

    const requiredIndex = jobLoadCount >= 0 && jobLoadCount <= state.jobs.length ? jobLoadCount : state.jobs.length;

    return (
        <React.Fragment>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        Browse Jobs
                    </h2>
                    {
                    state.isLoading 
                        ? (
                            <Spinner loading={state.isLoading} />
                        ) : ( state.jobs.length 
                            ? (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    { state.jobs.length && state.jobs.slice(0, requiredIndex).map(job => <JobListing key={job.id} job={job}/>) }
                                </div>
                            ) : (
                                <p>No Data found for the selected category, try changing the category or change search caritaria. Currently No Data is avalaibe to show on this page...</p>
                            )
                            
                        )
                    }
                </div>
                
            </section>
        </React.Fragment>
    )
}

export default JobListings