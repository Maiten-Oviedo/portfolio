import ProjectPage from '../componets/common/ProjectPage'
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

const project = {
  title: 'ElBuenSabor',
  subtitle: 'tienda de hamburguesas',
  technologies: TECHNOLOGIES,
  href: 'https://proyecto-el-buen-sabor.vercel.app/',
  p1: 'El Buen Sabor es una tienda de hamburguesas que cuenta tanto con Front End como con Back End. El Front End está desarrollado con React y el Back End con Firebase.',
  p2: 'El proyecto fue desarrollado en el tercer trimestre de mi carrera, lo hicimos con 3 compañeros mas utilizando la metodología SCRUM. Además también utilizamos Trello y video llamadas diarias.',
  h2: 'Pagos',
  p3: 'El proyecto me permitio aprender a realizar un carrousel de pagos con Mercado Pago. Este cuenta con 3 pasos, en el primero se puede personalizar la compra agregando mas productos o acompañamientos a estos. En el segundo se debe ingresar datos perosnales y en el ultimo elegir el metodo de pago. Para esto realicé una pequeña api utilizando Node JS la cual se comunica con la api de Mercado Pago.',
  h3: 'Administración',
  span1:
    'El proyecto cuenta con una página dedicada al Admin (funcionalidades particulares para personal con permiso). Este espacio cuenta con opciones como Nueva Venta, Nueva Compra, Dashboard, Asientos Contables y ABM.',
  span2:
    'En todo este proceso aprendí a utilizar Firebase, Google Analitycs (Dashboard), Google Cloud y la librería de recharts.',
}
const ElBuenSabor = () => {
  return (
    <>
      <main className="bg-zinc-950 px-[2em] md:px-[4em] xl:px-[6em] flex flex-col gap-[5em] md:gap-[7em]">
        <ProjectPage project={project} />
      </main>
    </>
  )
}

export default ElBuenSabor
