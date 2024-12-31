const Footer = () => {
  return (
    <ul className="flex justify-between items-center text-[.9em] md:text-[.7em] py-2">
      <li>
        <a href="#" className="cursor-pointer">
          Inicio
        </a>
      </li>
      <li>
        <a href="#projects" className="cursor-pointer">
          Proyectos
        </a>
      </li>
      <li>
        <a href="#process" className="cursor-pointer">
          Proceso
        </a>
      </li>
      <li>
        <a href="#about" className="cursor-pointer">
          Sobre Mí
        </a>
      </li>
      <li>
        <a href="#contact" className="cursor-pointer">
          Contacto
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/Maiten-Oviedo"
          target="_blank"
          rel="noreferrer noopener"
          className="cursor-pointer"
        >
          @maiten
        </a>
      </li>
    </ul>
  )
}

export default Footer
