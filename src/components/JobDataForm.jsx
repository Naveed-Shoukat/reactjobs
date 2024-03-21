import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify';

const JobDataForm = ({ formTitle, handleDataOperation, initialState = {
    title: '',
    type: '',
    location: '',
    description: '',
    salary: '',
    company: {
        name: '',
        description: '',
        contactEmail: '',
        contactPhone: '',
    }
} }) => {
    const salaryRangeOptions = ["Under $50K", "$50K - 60K", "$60K - 70K", "$70K - 80K", "$80K - 90K",
        "$90K - 100K", "$100K - 125K", "$125K - 150K", "$150K - 175K", "$175K - 200K", "Over $200K"];
    const jobTypeOptions = ['Full-Time', 'Part-Time', 'Remote', 'Internship'];
    const [state, setState] = useState(initialState);

    const navigate = useNavigate();

  const handleJobFormSubmit = (event) => {
    event.preventDefault();
    handleDataOperation(state)
    toast.success(`Job was ${formTitle}ed successfully`);
    
    return formTitle === 'Add' ? navigate('/jobs') : navigate(`/jobs/${state.id}`)
  }

    return (
        <React.Fragment>
            <section className="bg-indigo-50">
                <div className="container m-auto max-w-2xl py-24">
                    <div
                        className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                    >
                        <form onSubmit={handleJobFormSubmit}>
                            <h2 className="text-3xl text-center font-semibold mb-6">{`${formTitle} Job`}</h2>

                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                                >Job Type</label>
                                <select
                                    id="type"
                                    name="type"
                                    className="border rounded w-full py-2 px-3"
                                    required
                                    value={state.type}
                                    onChange={(e) => setState(prevState => ({ ...prevState, type: e.target.value }))}
                                >
                                    <option value="" disabled>Select Job Type</option>
                                    {jobTypeOptions.map((item, index) => (<option key={index} value={item} >{item}</option>))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2"
                                >Job Listing Name</label
                                >
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    placeholder="eg. Beautiful Apartment In Miami"
                                    required
                                    value={state.title}
                                    onChange={(e) => setState(prevState => ({ ...prevState, title: e.target.value }))}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-gray-700 font-bold mb-2"
                                >Description</label
                                >
                                <textarea
                                    id="description"
                                    name="description"
                                    className="border rounded w-full py-2 px-3"
                                    rows="4"
                                    placeholder="Add any job duties, expectations, requirements, etc"
                                    value={state.description}
                                    onChange={(e) => setState(prevState => ({ ...prevState, description: e.target.value }))}
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                                >Salary</label
                                >
                                <select
                                    id="salary"
                                    name="salary"
                                    className="border rounded w-full py-2 px-3"
                                    required
                                    value={state.salary}
                                    onChange={(e) => setState(prevState => ({ ...prevState, salary: e.target.value }))}
                                >
                                    <option value="" disabled>Select Salary Range</option>
                                    {salaryRangeOptions.map((item, index) => (<option key={index} value={item} >{item}</option>))}
                                </select>
                            </div>

                            <div className='mb-4'>
                                <label className='block text-gray-700 font-bold mb-2'>
                                    Location
                                </label>
                                <input
                                    type='text'
                                    id='location'
                                    name='location'
                                    className='border rounded w-full py-2 px-3 mb-2'
                                    placeholder='Company Location'
                                    required
                                    value={state.location}
                                    onChange={(e) => setState(prevState => ({ ...prevState, location: e.target.value }))}
                                />
                            </div>

                            <h3 className="text-2xl mb-5">Company Info</h3>

                            <div className="mb-4">
                                <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                                >
                                    Company Name</label
                                >
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Company Name"
                                    value={state.company.name}
                                    onChange={(e) => setState(prevState => ({ ...prevState, company: { ...prevState.company, name: e.target.value } }))}
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="company_description"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Company Description</label
                                >
                                <textarea
                                    id="company_description"
                                    name="company_description"
                                    className="border rounded w-full py-2 px-3"
                                    rows="4"
                                    placeholder="What does your company do?"
                                    value={state.company.description}
                                    onChange={(e) => setState(prevState => ({ ...prevState, company: { ...prevState.company, description: e.target.value } }))}
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="contact_email"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Contact Email</label
                                >
                                <input
                                    type="email"
                                    id="contact_email"
                                    name="contact_email"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Email address for applicants"
                                    required
                                    value={state.company.contactEmail}
                                    onChange={(e) => setState(prevState => ({ ...prevState, company: { ...prevState.company, contactEmail: e.target.value } }))}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="contact_phone"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Contact Phone</label
                                >
                                <input
                                    type="tel"
                                    id="contact_phone"
                                    name="contact_phone"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Optional phone for applicants"
                                    value={state.company.contactPhone}
                                    onChange={(e) => setState(prevState => ({ ...prevState, company: { ...prevState.company, contactPhone: e.target.value } }))}
                                />
                            </div>

                            <div>
                                <button
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    {`${formTitle} Job`}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default JobDataForm