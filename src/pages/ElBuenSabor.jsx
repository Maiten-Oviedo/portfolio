import DownArrowIcon from '../icons/DownArrowIcon'
import RightArrow from '../icons/RightArrow'
const TECHNOLOGIES = [
  'HTML',
  'CSS',
  'Tailwind',
  'Javascript',
  'TypeScript',
  'React',
  'Vite',
  'Firebase',
  'GoogleAnalytics',
  'MercadoPago',
  'NodeJs',
]
const ElBuenSabor = () => {
  return (
    <>
      <main className="bg-zinc-950 px-2 md:px-[2em] flex flex-col gap-[8em]">
        <section className="flex justify-between items-center h-[50vh] pt-[7em]">
          <div>
            <h1 className="group flex text-[2em] items-center gap-2 cursor-pointer">
              El Buen Sabor{' '}
              <DownArrowIcon className="size-6 rotate-90 group-hover:rotate-[135deg] transition-all" />
            </h1>
            <h3 className="text-white/70 text-[1.5em]">
              tienda de hamburguesas
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 my-2">
              {TECHNOLOGIES.map((tech, index) => {
                return (
                  <li key={index}>
                    <img
                      src={`/assets/icons/${tech}Icon.svg`}
                      alt={tech}
                      className="size-6"
                      title={tech}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="max-w-[40%] text-justify">
            <p>
              El Buen Sabor es una tienda de hamburguesas que cuenta tanto con
              Front End como con Back End. El Front End está desarrollado con
              React y el Back End con Firebase.
            </p>
          </div>
        </section>
        <article>
          <img
            src="/assets/images/projects/el-buen-sabor/1.jpg"
            alt="Imagen de proyecto El Buen Sabor en Laptop"
            className=""
          />
        </article>
        <section className="flex justify-around items-center">
          <img
            src="/assets/images/projects/el-buen-sabor/burger-guy.png"
            alt="imagen de un hombre hamburguesa"
            className="size-[20em]"
          />
          <div className="max-w-[40%] text-justify flex flex-col gap-2">
            <p>
              El Buen Sabor es un proyecto que me permitió aprender a trabajar
              con Firebase y a integrar MercadoPago. Además, me permitió
              aprender a trabajar con Google Analytics. El proyecto cuenta con
              un panel de administración donde se pueden ver las ventas y los
              productos vendidos.
            </p>
            <button className="group flex gap-2 items-center w-max bg-zinc-300 rounded-md px-4 py-2 text-black border-2 border-white hover:bg-transparent hover:text-white transition-all duration-500">
              <span>Ver Proyecto</span>
              <i>
                <RightArrow
                  className="size-[1.2em] group-hover:text-white transition-all"
                  fill={true}
                />
              </i>
            </button>
          </div>
        </section>
        <section>
          <ul>
            <li>
              <img
                className="w-[50%]"
                src="/assets/images/projects/el-buen-sabor/1.jpg"
                alt=""
              />
            </li>
            <li>
              <img
                className="w-full"
                src="/assets/images/projects/el-buen-sabor/1.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="w-full"
                src="/assets/images/projects/el-buen-sabor/1.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="w-full"
                src="/assets/images/projects/el-buen-sabor/1.png"
                alt=""
              />
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default ElBuenSabor
