const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-24">
      <a
        href="https://www.linkedin.com/in/maiten-oviedo/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src="./assets/images/Me.webp"
          alt="Imágen de Maiten Oviedo"
          className="size-12 rounded-full"
        />
      </a>
      <ul className="flex ">
        <li>
          <a href="#">Proyectos</a>
        </li>
        <li>
          <a href="#">Sobre Mí</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
