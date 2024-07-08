"use-client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MusicStudioTestimonials = [
  {
    quote:
      "The instructors here are incredibly talented and patient. My skills have improved significantly in just a few months.",
    name: "Sarah Johnson",
    title: "Student",
  },
  {
    quote:
      "My daughter loves her piano lessons. The school's environment is nurturing and inspiring!",
    name: "Michael Roberts",
    title: "Parent",
  },
  {
    quote:
      "The variety of classes and the expertise of the teachers make this music school the best in the area.",
    name: "Emily Carter",
    title: "Student",
  },
  {
    quote:
      "As a professional musician, I appreciate the advanced training and personalized approach. Highly recommend!",
    name: "David Thompson",
    title: "Professional Musician",
  },
  {
    quote:
      "The music school offers a fantastic curriculum that balances theory and practice perfectly.",
    name: "Linda Martinez",
    title: "Parent",
  },
  {
    quote:
      "I've been attending this music school for years, and it never ceases to amaze me with its dedication to students' growth.",
    name: "James Lee",
    title: "Long-term Student",
  },
];

function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.07] items-center justify-center relative overflow-hidden" >
      <h2 className="mb-10 text-center  tracking-normal text-3xl sm:text-4xl font-semibold">Voice of Success...</h2>
      <div className="flex justify-center w-full overflow-hidden">
        <div  className="w-full max-w-6xl ">
          <InfiniteMovingCards
            items={MusicStudioTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
