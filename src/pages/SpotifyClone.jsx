import ProjectPage from '../componets/common/ProjectPage'
const TECHNOLOGIES = ['HTML', 'CSS', 'Tailwind', 'TypeScript', 'Astro', 'React']

const project = {
  title: 'ClonDeSpotify',
  subtitle: 'realizado con Astro',
  technologies: TECHNOLOGIES,
  href: 'https://spotify-clone-pink-kappa.vercel.app/',
  p1: 'Aplicación web funcional copiada de Spotify, la cual cuenta con una serie de playlist con sus respectivas canciones.',
  p2: 'El proyecto fue desarrollado siguiendo un tutorial de Midudev, en este aprendí a utilizar Astro y convinarlo con otros frameworks como React JS.',
  h2: 'Reproducción',
  p3: 'La reproducción de música se produce combinando la propiedad de Astro de persistir un componente, el cual es de React J. ',
  h3: 'Estado Global',
  span1:
    'Para el estado global de tanto la playlist como la música que se esta reproduciendo se utilizando la Zustand.',
  span2:
    'En este proyecto aprendí o fortalecí mis conocimientos de varios temas, como Astro y sus distintantas propiedades, la reproducción en una aplicación web o la creacíon de un estado global de manera mas sencilla.',
  nextProject: 'ElBuenSabor',
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
