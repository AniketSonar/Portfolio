import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ParticlesBackground from "./components/ParticlesBackground"

import Certifications from "./components/Certifications"

function App() {
  return (
    <div className="relative bg-slate-950 min-h-screen text-white overflow-x-hidden">

      <ParticlesBackground />

      <div className="relative z-10">

        <Navbar />
        <Hero />
      
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />

      </div>

    </div>
  )
}

export default App