import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8 text-blue-100">Get the latest cube releases and solving tips</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <a href='/' className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md transition-colors">
              Subscribe
            </a>
          </div>
        </div>
      </section>
  )
}

export default Newsletter