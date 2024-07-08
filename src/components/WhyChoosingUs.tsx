"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const Content = [
    { 
        title: "Symphony of Skills",
        description: "Elevate your musical journey with our collaborative courses. Benefit from real-time interaction with expert instructors and fellow musicians, share your progress, and receive personalized feedback. Choose us for a supportive, engaging environment that helps you master instruments and deepen your musical knowledge.",
    },
    { 
        title: "Melodic Mastery",
        description: "Transform your passion for music with our dynamic courses. Engage with classmates and mentors, exchange creative ideas, and improve your performance. Our platform offers a collaborative learning experience, perfect for aspiring instrumentalists and seasoned musicians alike. Choose us for comprehensive, enjoyable music education.",
    },
    { 
        title: "Crescendo Collaboration",
        description:  "Experience the power of collaborative music education. Our courses connect you with other learners and experts, enabling you to practice, perform, and perfect your craft. Whether learning an instrument or diving into music theory, our platform supports your growth every step of the way. Choose us for a seamless, enriching learning journey.",
    },
    { 
        title: " Chord Connections",
        description:  "Immerse yourself in our engaging music courses designed for collaborative learning. Connect with musicians of all levels, exchange knowledge, and inspire each other. Our platform provides the tools you need to excel in your instrument and broaden your musical horizons. Choose us for a vibrant, interactive learning community.",
    },
    { 
        title: "Rhythmic Unity",
        description:  "Achieve musical excellence through our interactive courses. Work closely with fellow students and seasoned musicians to refine your skills. Share your progress, collaborate on projects, and make learning music a collective, enriching experience. Choose us for mastering any instrument or music genre in a supportive environment.",
    },


]

function WhyChoosingUs() {
  return (
    <div className="">
        <div className="p-10">
        <StickyScroll content={Content}/>
        </div>
    </div>
  )
}

export default WhyChoosingUs