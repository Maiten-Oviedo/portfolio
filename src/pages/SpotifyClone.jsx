import ProjectPage from '../componets/common/ProjectPage'
const TECHNOLOGIES = ['Html', 'Css', 'Tailwind', 'TypeScript', 'React', 'Astro']

const project = {
  title: 'ClonDeSpotify',
  subtitle: 'realizado con Astro',
  technologies: TECHNOLOGIES,
  href: 'https://spotify-clone-pink-kappa.vercel.app/',
  p1: 'Aplicación web funcional copiada de Spotify, la cual cuenta con una serie de playlist con sus respectivas canciones.',
  p2: 'El proyecto fue desarrollado siguiendo un tutorial de Midudev, en este aprendí a utilizar Astro y convinarlo con otros frameworks como React JS.',
  h2: 'Reproducción',
  p3: '',
  h3: 'Administración',
  span1:
    'El proyecto cuenta con una página dedicada al Admin (funcionalidades particulares para personal con permiso). Este espacio cuenta con opciones como Nueva Venta, Nueva Compra, Dashboard, Asientos Contables y ABM.',
  span2:
    'En todo este proceso aprendí a utilizar Firebase, Google Analitycs (Dashboard), Google Cloud y la librería de recharts.',
}
const SpotifyClone = () => {
  return (
    <>
      <main className="bg-zinc-950 px-[2em] md:px-[4em] xl:px-[6em] flex flex-col gap-[5em] md:gap-[7em]">
        <ProjectPage project={project} />
      </main>
    </>
  )
}

export default SpotifyClone
