import FeatredCourses from "@/components/FeatredCourses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoosingUs from "@/components/WhyChoosingUs";


export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.03]">
    {/* <h1 className="text-3xl font-extralight text-center">Music Studio</h1> */}
    <Herosection/>
    <FeatredCourses/>
    <WhyChoosingUs/>
    <Testimonials/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
    </main>
    </>
  );
}
