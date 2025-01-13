import ProcessItem from '../common/ProcessItem'

const PROCESS = [
  {
    id: 1,
    title: 'diseño de inteface de usuario (UX)',
    description: `Como primer paso, comienzo planteando el estilo que vaya acorde a tu necesidad, para que el usuario a la hora de navegar en tu página, se encuentre con la misma sensación que al visitar tu empresa.`,
    description2:
      'Para esto utilizo Figma, combinando elementos como la tipografía, color, composición, multimedia y animaciones para conseguir un impacto agradable a su cliente.',
  },
  {
    id: 2,
    title: 'experiencia de usuario(UI)',
    description:
      'Creo un diseño y un uso intuitivo y centrado, para que tu cliente no solo no se pierda en la web, si no que tampoco se olvide lo que ofréces.',
  },
  {
    id: 3,
    title: 'desarrollo de la aplicación',
    description:
      'Al realizar la aplicación web utilizo las tecnologías más modernas y las mejores prácticas. Para esto, cuento con mas de 4 años de experiencia con HTML5 (maquetación), CSS3 (diseño) y Javascript (lógica). Y mas de 1 año con el framework mas utilizado como lo es React JS.',
  },
  {
    id: 4,
    title: 'retroalimentación',
    description:
      'Durante todo el desarrollo me comunico con vos para que desde el principio hasta el final, tu web termine cumpliendo tus expectativas o quizá incluso, las supere ;)',
    description2:
      'Utilizaremos el medio de comunicación que sea mas cómodo para vos, haciendo que la experiencia de creación de tu página web sea tan tuya como mia.',
  },
]

const Process = () => {
  return (
    <section id="process" className="scroll-m-3">
      <h2 className=" flex flex-col justify-center  gap-2 font-extrabold  mb-1">
        <span className="text-[1em] md:text-[.7em]">PROCESO</span>
        <span className="text-white/70 text-[1.2em]">
          Cosas que pueden <span className="text-emerald-700/70">ayudarte</span>
        </span>
      </h2>
      <ul className=" flex flex-col justify-end items-end gap-2">
        {PROCESS.map((process, index) => {
          return <ProcessItem key={index} {...process} />
        })}
      </ul>
    </section>
  )
}

export default Process
