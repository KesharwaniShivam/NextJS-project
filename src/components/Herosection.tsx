import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function Herosection() {
  return (
    
    <div className='h-auto md:h-[48rem]  w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />  
    <div className='p-4 relative z-10 w-full text-center'>
  
    <h1 className="mt-24 md:mt-40 tracking-tight text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Gateway to Musical Mastery</h1>

    <p className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Explore our diverse course offerings, including Music Theory, Composition, Instrument Mastery, Vocal Training, Music Production, and more. With a blend of traditional techniques and modern innovations.</p>

    <div className='mt-6'>
        <Link href={"/courses"}>
        <Button borderRadius='1.75rem'
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >Explore Courses</Button>
        </Link>
    </div>
    </div>
    </div>
  )
}

export default Herosection