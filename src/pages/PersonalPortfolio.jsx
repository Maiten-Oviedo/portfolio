import ProjectPage from '../componets/common/ProjectPage'
const TECHNOLOGIES = ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'Astro', 'Vite']

const project = {
  title: 'PortfolioPersonal',
  subtitle: 'estudiante de administración',
  technologies: TECHNOLOGIES,
  href: 'https://adm-ursula.vercel.app/',
  p1: 'Fue realizado con Astro e implementando componentes de React JS. Cuenta con distintas secciones y un formulario de contacto.',
  p2: 'Dado que el portafolio está dirigido a una estudiante de Administración, su estilo y tipografía fueron elegidos de manera acorde al tema, dándole un tono profesional pero agradable a la vista.',
  h2: 'Componentes',
  p3: 'En este proyecto decidí utilizar varios componentes de Flowbite, dada la rapidez que ofrece para construir y adaptar estos componentes.',
  h3: 'Contacto',
  span1:
    'Para realizar un formulario de contacto funcional, opté por utilizar EmailJS. Para esto, inicié sesión con la cuenta del usuario y creé el template. Una vez creado, los correos se envían utilizando el ServiceID y el TemplateID.',
  nextProject: 'NineUrban',
}

const PersonalPortfolio = () => {
  return (
    <>
      <main className="bg-zinc-950 px-[2em] md:px-[4em] xl:px-[6em] flex flex-col gap-[5em] md:gap-[7em]">
        <ProjectPage project={project} />
      </main>
    </>
  )
}

export default PersonalPortfolio
