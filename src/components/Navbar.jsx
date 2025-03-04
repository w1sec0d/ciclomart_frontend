import Button from './Button'
import logo from '../assets/logo.png'
import { Menu, Person, ShoppingCart, Close } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const user = useSelector((state) => state.auth.authUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Cerrar el menú cuando la pantalla se hace grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Cerrar menú cuando se hace clic en un enlace
  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="bg-primary p-4 font-medium shadow-md h-[64px] flex items-center justify-between fixed left-0 top-0 w-screen z-10 text-lg">
      <div className="flex flex-row items-center">
        <Link to="/" className="flex flex-row items-center">
          <img
            src={logo}
            alt="Logo de Ciclomart, un carrito de compras fusionado con una bicicleta"
            className="w-12 h-12 mr-6"
          />
          <h1 className="text-xl font-bold">CicloMart</h1>
        </Link>
      </div>

      {/* Icono de menú móvil */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <Close /> : <Menu />}
        </button>
      </div>

      {/* Menú de navegación */}
      <ul
        className={`absolute left-0 w-full bg-primary shadow-md lg:shadow-none flex flex-col lg:flex-row lg:static lg:w-auto transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'top-[64px]' : '-top-[500px] lg:top-0'
        } p-4 lg:p-0 z-40`}
      >
        <li className="py-2 lg:py-0 lg:px-4 hover:font-bold text-center flex items-center justify-center">
          <Link to="/" className="block w-full" onClick={handleLinkClick}>
            Inicio
          </Link>
        </li>
        <li className="py-2 lg:py-0 lg:px-4 hover:font-bold text-center flex items-center justify-center">
          <Link
            to="/conocenos"
            className="block w-full"
            onClick={handleLinkClick}
          >
            Conócenos
          </Link>
        </li>
        <li className="py-2 lg:py-0 lg:px-4 hover:font-bold text-center flex items-center justify-center">
          <Link
            to="/search/bycicle"
            className="block w-full"
            onClick={handleLinkClick}
          >
            Explorar Bicicletas
          </Link>
        </li>
        <li className="py-2 lg:py-0 lg:px-4 hover:font-bold text-center flex items-center justify-center">
          <Link
            to="/search/component"
            className="block w-full"
            onClick={handleLinkClick}
          >
            Explorar Componentes
          </Link>
        </li>

        {/* Sección de usuario */}
        {user ? (
          <li className="py-2 lg:py-0 lg:px-4 hover:font-bold text-center flex flex-col lg:flex-row items-center justify-center gap-2">
            {user.rol === 'vendedor' && (
              <Button
                className="border-[1px] text-tertiary bg-transparent border-tertiary w-full lg:w-auto text-base hover:bg-tertiary hover:text-white active:outline-neutral-300 focus:outline-neutral-300"
                to="/publish"
                onClick={handleLinkClick}
              >
                Publicar
              </Button>
            )}
            <Button
              className="border-[1px] text-tertiary bg-transparent border-tertiary w-full lg:w-auto text-base hover:bg-tertiary hover:text-white active:outline-neutral-300 focus:outline-neutral-300"
              to="/profile"
              onClick={handleLinkClick}
            >
              <Person />
              Perfil
            </Button>
          </li>
        ) : (
          <li className="py-2 lg:py-0 lg:px-4 hover:font-bold text-center flex flex-col lg:flex-row items-center justify-center gap-2">
            <Button
              className="text-white bg-tertiary w-full max-w-[200px] lg:w-auto text-base outline-none focus:outline-primary active:outline-primary hover:bg-tertiary/90 mb-2 lg:mb-0 lg:mr-2"
              to="/login"
              onClick={handleLinkClick}
            >
              Inicia sesión
            </Button>
            <Button
              className="text-white bg-tertiary w-full max-w-[200px] lg:w-auto text-base outline-none focus:outline-primary active:outline-primary hover:bg-tertiary/90"
              to="/register"
              onClick={handleLinkClick}
            >
              Regístrate
            </Button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
