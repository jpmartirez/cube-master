import React from 'react'
import categories from '../../assets/categories'
import { Shuffle } from "lucide-react"

const Categories = () => {
  return (
    <section className="py-16 bg-white" id='categories'>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 cardAppear">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our extensive collection of puzzles for every skill level
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 cardAppearLeft">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-300 p-6 text-center group"
              >
                <div
                  className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Shuffle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
                <p className="text-sm text-gray-500">{category.count} products</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Categories