import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ title, description, linkto, linkText, linkClasses,bg }) => {
    return (
        <React.Fragment>
            <div className={`p-6 rounded-lg shadow-md ${bg}`}>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-2 mb-4">{description}</p>
                <Link
                    to={linkto}
                    className={`inline-block text-white rounded-lg px-4 py-2 ${linkClasses}`}
                >
                    {linkText}
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Card