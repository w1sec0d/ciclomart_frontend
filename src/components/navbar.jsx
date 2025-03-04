import Button from '../Button/Button'
import { SoccerBall, Menu } from 'iconoir-react'
import { useRef } from 'react'

const NavbarLink = ({ className, children }) => (
  <a
    href=""
    className={`max-w-[300px] hover:font-semibold lg:mr-4 ${className}`}
  >
    {children}
  </a>
)

const Navbar = () => {
  const menuRef = useRef()

  function showMenu() {
    menuRef.current.classList.toggle('top-[60px]')
    menuRef.current.classList.toggle('-top-[260px]')
  }

  return (
    <nav className="fixed left-0 top-0 flex h-[60px] w-screen items-center justify-between bg-neutral-900 px-8 lg:flex-row">
      <div className="z-50 flex flex-row items-center">
        <SoccerBall color="#2563eb" className="h-[40px] w-[40px]" />
        <h1 className="ml-2 text-xl font-bold">Copa América 2024</h1>
      </div>
      <div
        className="absolute left-0 top-[60px] flex w-screen flex-col items-center justify-center bg-neutral-900 py-6 transition-all lg:static lg:w-fit lg:flex-row lg:py-0"
        ref={menuRef}
      >
        <NavbarLink className="mb-4 lg:mb-0">Inicio</NavbarLink>
        <NavbarLink>Sobre Nosotros</NavbarLink>
        <Button className="bg-black lg:mr-4 lg:mt-0">Iniciar Sesión</Button>
        <Button className="lg:mt-0">Registrarse</Button>
      </div>
      <Menu className="z-50 lg:hidden" onClick={showMenu} />
    </nav>
  )
}

export default Navbar
