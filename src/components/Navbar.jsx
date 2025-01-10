import Button from './Button'

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 font-medium shadow-md md:h-[64px] flex items-center fixed left-0 top-0 w-full z-10">
      <ul className="flex flex-col md:flex-row w-full">
        <li className="mx-4 hover:font-bold flex items-center">
          <a href="/">Inicio</a>
        </li>
        <li className="mx-4 hover:font-bold flex items-center">
          <a href="/about">Acerca de</a>
        </li>
        <li className="mx-4 hover:font-bold flex items-center">
          <a href="/contact">Contacto</a>
        </li>
        <li className="mx-4 hover:font-bold flex items-center ml-auto">
          <Button className="bg-tertiary" to="/register">
            Regístrate
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
