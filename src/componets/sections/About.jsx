import 'react'
import SliderHero from './SliderHero'

const About = () => {
  return (
    <section className="flex flex-col gap-4 md:gap-8">
      <h2 className="flex flex-col justify-center items-end md:items-start gap-2 font-extrabold">
        <span className="text-[1em] md:text-[.7em]">SOBRE MÍ</span>
        <span className="flex gap-2 text-white/70 text-[1.2em] text-nowrap">
          <span>Desarrollador Frontend</span>
          <span className="text-emerald-700/70">+1 año de experiencia</span>
        </span>
      </h2>
      <div className="flex flex-col justify-between items-center gap-4 md:flex-row-reverse md:gap-8">
        <article className="flex flex-col gap-4 justify-between items-center md:max-w-[55%]">
          <div className="flex flex-col gap-4 text-[1em] font-normal text-pretty md:text-justify">
            <p>
              Mis primeras experiencias en programación fueron con Arduino,
              participando en ferias de ciencias e incluso programando algunos
              robots. Además, enseñé en algunas escuelas los conceptos básicos
              del desarrollo con{' '}
              <span className="font-bold text-[#886ce4]">Arduino</span> 👾.
            </p>

            <p>
              Aparte del desarrollo, tengo diversos intereses como viajar, el
              trekking y tomar mucho mate 🧉. Me encantan los ríos y el{' '}
              <span className="text-emerald-700 font-extrabold">verde</span>. Mi
              sueño es poder viajar mientras trabajo en lo que me gusta.
            </p>

            <p>
              Actualmente, estoy cursando la carrera{' '}
              <span className="italic text-blue-300">
                {`"Tecnicatura Superior en Programación"`}
              </span>
              , en la que día a día enriquezco más mis conocimientos 📚.
            </p>
          </div>
        </article>

        <article className="flex flex-col items-center">
          <SliderHero />
          <a
            href="https://www.instagram.com/maiten_oviedo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-[.7em] text-white/60 hover:text-white">
              @maiten_oviedo
            </p>
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
