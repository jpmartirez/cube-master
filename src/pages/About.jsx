import React from 'react'
import NavBar from '../components/Homepage/NavBar'
import AboutHero from '../components/aboutComponents/AboutHero'
import StorySection from '../components/aboutComponents/StorySection'
import Values from '../components/aboutComponents/Values'
import Timeline from '../components/aboutComponents/Timeline'
import Team from '../components/aboutComponents/Team'
import Mission from '../components/aboutComponents/Mission'
import Footer from '../components/Homepage/Footer'

const About = ({ cartCount}) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100'>
        <NavBar cartCount={cartCount}/>
        <AboutHero />
        <StorySection />
        <Values />
        <Timeline />
        <Team />
        <Mission />
        <Footer />
    </div>
  )
}

export default About