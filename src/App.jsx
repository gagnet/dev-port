import { Navbar } from "./layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Experience } from "./sections/Experience"
import { Projects } from "./sections/Projects"
import { Testimonials } from "./sections/Testimonials"


function App() {

  return (
    <>
    <div className="min-h-screen overflow-x-hidden bg-[#0f1418] text-white">
    <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
         <Experience />
        <Contact />
        <Testimonials />
      </main>
    </div>
    </>
  )
}

export default App
