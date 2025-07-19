import React from 'react'
import teamMembers from '../../assets/aboutAssets/teams'
import MembersCard from './MembersCard'


const Team = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Passionate cubers dedicated to serving the global speedcubing community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 cardLeftView">
            {teamMembers.map((member, index) => (
              <MembersCard key={index} name={member.name} role={member.role} image={member.image} bio={member.bio} achievement={member.achievement}/>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Team