'use client'
import React from 'react'
import { Meteors } from '@/components/ui/meteors'

function page() {
  return (
    <div className="min-h-screen  pt-36 bg-black">
      <h1 className="text-2xl md:text-6xl font-bold tracking-tight text-center font-sans mb-7">Contact us</h1>
      <div className='w-full flex justify-center items-center  '>
      <form className="mt-8 space-y-6 sm:w-[30vw]  h-auto" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px ">
            <div className='mb-5'>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div className=''>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className='mb-5'>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
              
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your message"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group  w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className=''>
      <Meteors className='sm:w-[50vw] w-10 h-auto' number={20} /> 
      </div>
    </div>
  )
}

export default page