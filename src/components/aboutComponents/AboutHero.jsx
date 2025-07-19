import React from 'react'

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight cardAppear">
              Our
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Cube Story
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed cardAppear">
              From passionate cubers to global community builders - discover how CubeMaster became the world's trusted
              cube destination
            </p>
            <div className="flex justify-center cardAppear">
              <div className="grid grid-cols-4 gap-2 transform -rotate-12">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded ${
                      ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-orange-400", "bg-purple-400"][
                        i % 6
                      ]
                    } animate-pulse`}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutHero