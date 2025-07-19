import React from 'react'
import { Search, ShoppingCart, Star, Menu, User, Heart, Zap, Trophy, Clock, Shuffle } from "lucide-react"

const Features = () => {
  return (
    <section className="py-16 bg-white cardLeftView">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Lightning Fast Shipping</h4>
              <p className="text-gray-600">Get your cubes delivered in 24-48 hours with our express shipping</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Competition Grade</h4>
              <p className="text-gray-600">All our cubes meet official WCA competition standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">30-Day Guarantee</h4>
              <p className="text-gray-600">Not satisfied? Return any cube within 30 days for a full refund</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Features