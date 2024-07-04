'use client'

import Link from 'next/link'
import React, { use } from 'react'
import Coursedata from '../data/courses.json'
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
        id: number,
        title: string ,
        slug: string ,
        description: string,
        price: number,
        instructor: string ,
        isFeatured: boolean
      
}

function FeatredCourses() {
 const featuredCourses = Coursedata.courses.filter((course: Course) => course.isFeatured)
  return (
    <div className='py-12 bg-slate-950 '>
        <div>
            <div className='text-center'>
            <h2 className='text-base font-light tracking-wider text-slate-100 uppercase'>Featured Courses</h2>
            <p className=' text-5xl mt-3 font-bold text-slate-100 tracking-tight '>Learn With The Masters</p>
            </div>
        </div>
        <div className='mt-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            {featuredCourses.map((course : Course)=> (
               <div key={course.id} className='flex justify-center'>
                 <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <div className='flex flex-col items-center text-center p-4 sm:p-6 flex-grow'>
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                    <Link  href={`/courses/${course.slug}`}>
                      Learn more
                    </Link>
                  </div>
                 </BackgroundGradient>
                </div>
            ))}
          </div>
        </div>
        <div className='mt-16 text-center'>
          <Link  href={"/courses"}
          className='px-5 py-2 sm:px-9 sm:py-3 tracking-normal bg-slate-900 dark:bg-slate-300 text-white dark:text-slate-900 border-neutral-100  dark:border-slate-800 hover:bg-slate-200 border   rounded-xl transition duration-200'>
          All Courses
          </Link>
         
        </div>
        
    </div>
  )
}

export default FeatredCourses