import Hero from '../componets/sections/Hero'
import Projects from '../componets/sections/Projects'
import Process from '../componets/sections/Process'
import About from '../componets/sections/About'
import Contact from '../componets/sections/Contact'

const Landing = () => {
  return (
    <>
      <main className="flex flex-col gap-24 px-2 md:px-[1.5em] text-[.7em] md:text-[.7em] lg:text-[1em] xl:text-[1.2em] 2xl:text-[1.5em]">
        <Hero />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default Landing
