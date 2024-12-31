import About from './componets/sections/About'
import Contact from './componets/sections/Contact'
import Footer from './componets/sections/Footer'
import Hero from './componets/sections/Hero'
import Process from './componets/sections/Process'
import Projects from './componets/sections/Projects'

function App() {
  return (
    <>
      <main className="flex flex-col gap-24 px-2 md:px-[1.5em] text-[.7em] md:text-[.7em] lg:text-[1em] xl:text-[1.2em] 2xl:text-[1.5em]">
        <Hero />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
      <footer className=" px-2 md:px-[1.5em] py-[1.5em]  text-[.7em] md:text-[.7em] lg:text-[1em] xl:text-[1.2em] 2xl:text-[1.5em]">
        <Footer />
      </footer>
    </>
  )
}

export default App
