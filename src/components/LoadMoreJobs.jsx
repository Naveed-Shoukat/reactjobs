import React from 'react'

const LoadMoreJobs = ({isLoadMoreJob, handleMoreJobsBtn}) => {
  let btnClass = 'grid grid-cols-1 md:grid-cols-1 ml-auto mr-20  text-center font-bold py-3 px-20 rounded-xl '
  
  btnClass += isLoadMoreJob ? 'cursor-pointer bg-indigo-900 text-white hover:bg-indigo-600' : 'cursor-not-allowed bg-gray-400 text-red';

  return (
    <React.Fragment>
        <div className='bg-blue-50 pb-8'>
            <button
              onClick={handleMoreJobsBtn} 
              className={btnClass}>
                {isLoadMoreJob ? 'Load More Jobs' : 'No More Jobs to Load'}
            </button>
        </div>
    </React.Fragment>
  )
}

export default LoadMoreJobs