import React from 'react'
import { Zap, Trophy } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative  overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className='cardAppearLeft'>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Master the
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Ultimate Puzzle
                </span>
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Discover premium speed cubes, brain teasers, and accessories. From beginners to world champions - find
                your perfect cube today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md transition-colors flex items-center justify-center cursor-pointer">
                  <Zap className="w-5 h-5 mr-2" />
                  Shop Speed Cubes
                </button>
                <a href='https://www.worldcubeassociation.org/competitions?' target='_blank' className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent rounded-md transition-colors flex items-center justify-center cursor-pointer">
                  <Trophy className="w-5 h-5 mr-2" />
                  Competition Gear
                </a>
              </div>
            </div>
            <div className="relative cardAppear">
              <div className="grid grid-cols-3 gap-4 transform rotate-12">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-lg ${
                      ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-orange-500", "bg-purple-500"][
                        i % 6
                      ]
                    } shadow-lg animate-pulse`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero