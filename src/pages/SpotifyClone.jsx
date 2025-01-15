import ProjectPage from '../componets/common/ProjectPage'
const TECHNOLOGIES = ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'Astro', 'React']

const project = {
  title: 'ClonDeSpotify',
  subtitle: 'realizado con Astro',
  technologies: TECHNOLOGIES,
  href: 'https://spotify-clone-pink-kappa.vercel.app/',
  p1: 'Aplicación web funcional inspirada en Spotify, que cuenta con una serie de playlists con sus respectivas canciones.',
  p2: 'El proyecto fue desarrollado siguiendo un tutorial de Midudev. En este, aprendí a utilizar Astro y combinarlo con otros frameworks como React JS.',
  h2: 'Reproducción',
  p3: 'La reproducción de música se logra combinando la propiedad de Astro de persistir un componente, el cual es de React JS.',
  h3: 'Estado Global',
  span1:
    'Para el estado global de las playlists y la música que se está reproduciendo, se utilizó Zustand.',
  span2:
    'En este proyecto aprendí o fortalecí mis conocimientos en varios temas, como Astro y sus distintas propiedades, la reproducción de música en una aplicación web y la creación de un estado global de manera más sencilla.',
  nextProject: 'PortfolioPersonal',
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
