import FeatredCourses from "@/components/FeatredCourses";
import Herosection from "@/components/Herosection";


export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.03]">
    {/* <h1 className="text-3xl font-extralight text-center">Music Studio</h1> */}
    <Herosection/>
    <FeatredCourses/>
    </main>
    </>
  );
}
