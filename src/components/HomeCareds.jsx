import React from 'react'
import Card from './Card'

const HomeCareds = () => {
    return (
        <React.Fragment>
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        <Card 
                            bg='bg-gray-100'
                            tiel={'For Developers'} 
                            description={'Browse our React jobs and start your career today'}
                            linkto={'/jobs'}
                            linkText={'Browse Jobs'}
                            linkClasses='bg-black hover:bg-gray-700'
                        />
                        <Card 
                            bg='bg-indigo-100'
                            tiel={'For Employers'}  
                            description={'List your job to find the perfect developer for the role'}
                            linkto={'/add-job'}
                            linkText={'Add Job'}
                            linkClasses='bg-indigo-500 hover:bg-indigo-600'
                        />
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default HomeCareds