import ProjectPage from '../componets/common/ProjectPage'
const TECHNOLOGIES = ['HTML', 'CSS', 'Javascript']

const project = {
  title: 'NineUrban',
  subtitle: 'ecommerce de ropa',
  technologies: TECHNOLOGIES,
  href: 'https://maiten-oviedo.github.io/Ecommerce/',
  p1: 'Mi primer proyecto como tal. Desarrollado junto a un compañero, donde ambos estamos forjando las bases de nuestros conocimientos en el Front End.',
  p2: `Se expuso como trabajo final del curso "Introducción al Desarrollo Web". El disfrute y el estrés fueron directamente proporcionales, dado mis pocos conocimientos del momento. Por ello, decidí nunca mejorarlo ni cambiarle una sola línea de código.`,
  h2: 'Secciones',
  p3: 'El ecommerce cuenta con 4 secciones principales: el inicio, donde se muestran las principales ventas y una sección de contacto; una sección de ropa particular tanto para hombre como para mujer; y, finalmente, el carrito.',
  h3: 'Carrito',
  span1:
    'Fue mi primer contacto con código de JavaScript puro y la primera vez que utilicé el localStorage. Fue todo un desafío comprender cómo funcionaba este almacenamiento temporal.',
  span2:
    'En todo este proceso obtuve un conocimiento magnífico, el cual me hizo decidirme a estudiar programación.',
  nextProject: 'ElBuenSabor',
}
const NineUrban = () => {
  return (
    <>
      <main className="bg-zinc-950 px-[2em] md:px-[4em] xl:px-[6em] flex flex-col gap-[5em] md:gap-[7em]">
        <ProjectPage project={project} />
      </main>
    </>
  )
}

export default NineUrban
