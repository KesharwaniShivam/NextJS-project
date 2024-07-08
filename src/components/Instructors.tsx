'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'

const instructors = [
    {
      id: 1,
      name: "Aarav Singh",
      designation: "Guitar Instructor",
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "Maya Sharma",
      designation: "Piano Instructor",
      image: "https://images.pexels.com/photos/4852308/pexels-photo-4852308.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Ravi Kumar",
      designation: "Violin Instructor",
      image: "https://images.pexels.com/photos/7647313/pexels-photo-7647313.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      name: "Priya Patel",
      designation: "Vocal Instructor",
      image: "https://images.pexels.com/photos/4852304/pexels-photo-4852304.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      name: "Vikram Rao",
      designation: "Percussion Instructor",
      image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]
  

function Instructors() {
  return (
    <div className='relative h-[40rem] flex items-center justify-center overflow-hidden'>
        <WavyBackground className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center mb-6">
        Our Instructors
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center mb-5">
      Experienced music instructors specializing in guitar, piano, violin, vocals, and percussion, covering classical, contemporary, and world music genres.
      </p>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={instructors} />
    </div>
    </WavyBackground>
    </div>
  )
}

export default Instructors