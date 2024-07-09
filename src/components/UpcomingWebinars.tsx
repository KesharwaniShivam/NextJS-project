"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const Webinars = [
  {
    title: "Mastering Music Theory",
    description:
      "Join our comprehensive webinar on music theory where we cover everything. ",
    link: "mastering-music-theory-webinar",
  },
  {
    title: "Jazz Improvisation Techniques",
    description:
      "Learn the art of jazz improvisation with our expert-led webinar. ",
    link: "jazz-improvisation-techniques-webinar",
  },
  {
    title: "Songwriting for Beginners",
    description:
      "Discover the basics of songwriting in our engaging webinar. ",
    link: "songwriting-for-beginners-webinar",
  },
  {
    title: "Advanced Guitar Techniques",
    description:
      "Elevate your guitar playing with our advanced techniques webinar. ",
    link: "advanced-guitar-techniques-webinar",
  },
  {
    title: "Recording Fundamentals",
    description:
      "Dive into the world of music production with our webinar on recording fundamentals.",
    link: "recording-and-production-fundamentals-webinar",
  },
  {
    title: "Vocal Techniques and Performance",
    description:
      "Enhance your vocal abilities with our webinar on vocal techniques and performance. ",
    link: "vocal-techniques-and-performance-webinar",
  },
];

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base font-light tracking-wider text-slate-100 uppercase">
            Featured Courses
          </h2>
          <p className=" text-5xl mt-3 font-bold text-slate-100 tracking-tight font-sans">
            Upcoming webinars
          </p>
        </div>

        
          <div className="max-w-7xl mx-auto px-8 mt-10">
            <HoverEffect items={Webinars} />
          </div>
        
        <div className="text-center mt-6">
          <Link
            href={"/"}
            className="px-5 py-2 sm:px-9 sm:py-3 tracking-normal bg-slate-900 dark:bg-slate-300 text-white dark:text-slate-900 border-neutral-100  dark:border-slate-800 hover:bg-slate-200 border   rounded-xl transition duration-200"
          >
            All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
