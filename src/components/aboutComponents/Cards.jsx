import React from 'react'

const Cards = ({icon, title, description, color}) => {
  return (
    <div className="max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-full mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
            {icon}
        </div>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
    </div>
  )
}

export default Cards