import ProjectPage from '../componets/common/ProjectPage'
const TECHNOLOGIES = ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'Astro', 'Vite']

const project = {
  title: 'Portfolio Website',
  subtitle: 'estudiante de administración',
  technologies: TECHNOLOGIES,
  href: 'https://adm-ursula.vercel.app/',
  p1: 'Fue realizado con Astro e impliementando componentes de React Js. Cuenta con distintas secciones y un formulario de contacto.',
  p2: 'Dado que el portoflio esta dirigido para una estudiante de Administración, es estilo como la tipografía fueron elegidos de manera acorde con el tema, dandole un tono profesional pero agradable a la vista.',
  h2: 'Componentes',
  p3: 'En este proyecto decidí utilizar varios componentes de Flowbite, dado la rapidez que ofrece para construir y adaptar estos componentes.',
  h3: 'Contacto',
  span1:
    'Para realizar un formulario de contacto funcional, opté por utilizar EmailJs, para esto inicie sesión con la cuenta del usuario y cree el template. Una vez creado los correos se envian utilizando el ServiceId y el TemplateID.',
  span2:
    'En todo este proceso aprendí a utilizar Firebase, Google Analitycs (Dashboard), Google Cloud y la librería de recharts.',
  nextProject: 'ClonDeSpotify',
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
