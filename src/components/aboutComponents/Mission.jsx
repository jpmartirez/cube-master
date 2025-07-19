import React from 'react'
import {Target,Globe} from "lucide-react"

const Mission = () => {
  return (
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white ">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto cardAppear">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-blue-100">
              "To make premium speedcubes accessible to every cuber, regardless of their location or experience level,
              while fostering a global community united by the love of solving puzzles."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2 dark:focus:ring-yellow-900 flex justify-center items-center cursor-pointer">
                <Globe className="w-5 h-5 mr-2" />
                Join Our Community
              </button>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center justify-center cursor-pointer">
                <Target className="w-5 h-5 mr-2" />
                Our Impact
              </button>


            </div>
          </div>
        </div>
    </section>
  )
}

export default Mission