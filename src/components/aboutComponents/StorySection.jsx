import React from 'react'

const StorySection = () => {
  return (
    <section className="py-16 bg-white cardLeftView">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className=''>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">How It All Started</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  It all began in 2018 when our founder, Alex Chen, couldn't find quality speed cubes in local stores.
                  As a competitive speedcuber frustrated by limited options and high prices, Alex decided to source
                  premium cubes directly from manufacturers.
                </p>
                <p>
                  What started as a small operation in a garage quickly grew into something bigger. Word spread through
                  the cubing community about our authentic, competition-grade puzzles at fair prices. Soon, cubers from
                  around the world were reaching out.
                </p>
                <p>
                  Today, CubeMaster serves over 100,000 customers globally, from complete beginners taking their first
                  steps into cubing to world record holders competing at the highest level. Our mission remains the
                  same: making premium cubes accessible to everyone.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100K+</div>
                    <div className="text-blue-100">Happy Cubers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-blue-100">Cube Models</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default StorySection