import React from 'react'
import ProcessItem from '../common/ProcessItem'

const PROCESS = [
  {
    id: 1,
    title: 'Diseño de interfaz de usuario (UX)',
    description: `Como primer paso, comienzo planteando el estilo que vaya acorde a tu necesidad, para que el usuario a la hora de navegar en tu página, se encuentre con la misma sensación que al visitar tu empresa.`,
    description2:
      'Para esto utilizo Figma, combinando elementos como la tipografía, color, composición, multimedia y animaciones para conseguir un impacto agradable a su cliente.',
  },
  {
    id: 2,
    title: 'Experiencia de usuario(UI)',
    description:
      'Creo un diseño y un uso intuitivo y centrado, para que tu cliente no solo no se pierda en la web, sino que tampoco se olvide de lo que ofreces.',
  },
  {
    id: 3,
    title: 'Desarrollo de la aplicación',
    description:
      'Al realizar la aplicación web utilizo las tecnologías más modernas y las mejores prácticas. Para esto, cuento con más de 4 años de experiencia con HTML5 (maquetación), CSS3 (diseño) y Javascript (lógica). Y más de 1 año con el framework más utilizado como lo es React JS.',
  },
  {
    id: 4,
    title: 'Retroalimentación',
    description:
      'Durante todo el desarrollo me comunico con vos para que desde el principio hasta el final, tu web termine cumpliendo tus expectativas o quizá incluso, las supere ;)',
    description2:
      'Utilizaremos el medio de comunicación que sea más cómodo para vos, haciendo que la experiencia de creación de tu página web sea tan tuya como mía.',
  },
]

const Process = () => {
  return (
    <section
      id="process"
      className="scroll-m-3"
      aria-labelledby="process-heading"
    >
      <h2
        id="process-heading"
        className="flex flex-col justify-center gap-2 font-extrabold mb-1"
      >
        <span className="text-[1em] md:text-[.7em]">PROCESO</span>
        <span className="text-white/70 text-[1.2em]">
          Cosas que pueden <span className="text-primary">ayudarte</span>
        </span>
      </h2>
      <ul className="flex flex-col justify-end items-end gap-2" role="list">
        {PROCESS.map(process => (
          <ProcessItem key={process.id} {...process} />
        ))}
      </ul>
    </section>
  )
}

export default React.memo(Process)
