import React from 'react'
import values from '../../assets/aboutAssets/values'
import { Trophy,Users,Lightbulb,Shield,} from "lucide-react"
import Cards from './Cards'

const Values = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 cardLeftView">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              These principles guide everything we do, from product selection to customer service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {values.map((value, index) => (
              <Cards key={index} title={value.title} description={value.description} color={value.color} icon={value.icon}/>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Values