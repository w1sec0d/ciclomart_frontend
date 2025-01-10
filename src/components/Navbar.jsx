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

        {/*Barra de busqueda */}
        <div className="flexs mx-4 p-4 flex w-full flex-wrap items-stretch">
          <input 
            type="search"
            className="flex m-0 w-1/3 md:w-1/6"
            placeholder = "Buscar"
            aria-label = "Buscar">
          </input>
          <Button 
            className="flex mx-2 rounded-r px-6 py-2 text-xs uppercase text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5"
            to="/search">
            Buscar
          </Button>
        </div>

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
