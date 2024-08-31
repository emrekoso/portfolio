import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Tech from "./components/Tech"
import Experience from "./components/Experience"
import Project from "./components/Project"
import Contact from "./components/Contact"
import { PROJECTS } from './constants'

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-400 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
        <About/>
        <Tech/>
        <Experience/>
        <Project projects={PROJECTS}/>
        <Contact/>
      </div>

    </div>
  )
}