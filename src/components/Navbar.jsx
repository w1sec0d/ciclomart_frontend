import Button from './Button'
import logo from '../assets/logo.png'
import LanguageSwitcher from './LanguageSwitcher'
import {
  Menu,
  Person,
  Close,
  Home,
  Info,
  DirectionsBike,
  Build,
  Publish,
  Login,
  PersonAdd,
} from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t } = useTranslation()
  const user = useSelector((state) => state.auth.authUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="bg-primary p-4 font-medium shadow-md h-[64px] flex items-center justify-between fixed left-0 top-0 w-screen z-50 text-lg">
      <div className="flex flex-row items-center relative z-40">
        <Link to="/" className="flex flex-row items-center">
          <img src={logo} alt={t('nav.logoAlt')} className="w-12 h-12 mr-2" />
          <h1 className="text-xl font-bold">
            <span className="text-tertiary font-outline-1 tracking-[2px] text-[25px] font-extrabold">
              Ciclo
            </span>
            <span className="text-secondary font-outline-1 tracking-[2px] text-[25px] font-extrabold">
              Mart
            </span>
          </h1>
        </Link>
      </div>

      {/* Mobile menu icon */}
      <div className="lg:hidden flex items-center gap-2 relative z-40">
        <LanguageSwitcher />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <Close /> : <Menu />}
        </button>
      </div>

      {/* Navigation menu */}
      <ul
        className={`absolute left-0 w-full bg-primary shadow-md lg:shadow-none flex flex-col lg:flex-row lg:static lg:w-auto transition-all duration-300 ease-in-out gap-2 lg:gap-4 ${
          isMenuOpen ? 'top-[64px]' : '-top-[600px] lg:top-0'
        } p-4 lg:p-0 z-30`}
      >
        <li className="py-2 hover:font-bold text-center flex items-center justify-center">
          <Link to="/" className="block w-full" onClick={handleLinkClick}>
            <Home className="mr-2" /> {t('nav.home')}
          </Link>
        </li>
        <li className="py-2 hover:font-bold text-center flex items-center justify-center">
          <Link
            to="/aboutUs"
            className="block w-full"
            onClick={handleLinkClick}
          >
            <Info className="mr-2" /> {t('nav.aboutUs')}
          </Link>
        </li>
        <li className="py-2 hover:font-bold text-center flex items-center justify-center">
          <Button
            className="text-white bg-tertiary w-full max-w-[250px] lg:w-auto text-base outline-none focus:outline-primary active:outline-primary hover:bg-tertiary/90 font-semibold"
            to="/search/bycicle"
            onClick={handleLinkClick}
          >
            <DirectionsBike className="mr-2" /> {t('nav.exploreBicycles')}
          </Button>
        </li>
        <li className="py-2 hover:font-bold text-center flex items-center justify-center">
          <Button
            className="text-white bg-tertiary w-full max-w-[250px] lg:w-auto text-base outline-none focus:outline-primary active:outline-primary hover:bg-tertiary/90 font-semibold"
            to="/search/component"
            onClick={handleLinkClick}
          >
            <Build className="mr-2" /> {t('nav.exploreComponents')}
          </Button>
        </li>
        {/* User section */}
        {user ? (
          <>
            {user.rol === 'vendedor' && (
              <li className="py-2 hover:font-bold text-center flex items-center justify-center">
                <Button
                  className="text-white bg-tertiary w-full max-w-[200px] lg:w-auto text-base outline-none focus:outline-primary active:outline-primary hover:bg-tertiary/90 mb-2 lg:mb-0"
                  to="/publish"
                  onClick={handleLinkClick}
                >
                  <Publish /> {t('nav.publish')}
                </Button>
              </li>
            )}
            <li className="py-2 hover:font-bold text-center flex items-center justify-center">
              <Button
                className="text-white bg-tertiary w-full max-w-[200px] lg:w-auto text-base outline-none focus:outline-primary active:outline-primary hover:bg-tertiary/90"
                to="/profile"
                onClick={handleLinkClick}
              >
                <Person className="mr-2" /> {t('nav.profile')}
              </Button>
            </li>
            <li className="py-2 text-center items-center justify-center hidden lg:flex">
              <LanguageSwitcher />
            </li>
          </>
        ) : (
          <>
            <li className="py-2 hover:font-bold text-center flex items-center justify-center">
              <Button
                className="text-white bg-secondary w-full max-w-[200px] lg:w-auto text-base outline-none focus:outline-primary active:outline-primary hover:bg-secondary/90 mb-2 lg:mb-0 font-bold"
                to="/login"
                onClick={handleLinkClick}
              >
                <Login /> {t('nav.login')}
              </Button>
            </li>
            <li className="py-2 hover:font-bold text-center flex items-center justify-center">
              <Button
                className="text-white bg-secondary w-full max-w-[200px] lg:w-auto text-base outline-none focus:outline-primary active:outline-primary hover:bg-secondary/90 font-bold"
                to="/register"
                onClick={handleLinkClick}
              >
                <PersonAdd /> {t('nav.register')}
              </Button>
            </li>
            <li className="py-2 text-center items-center justify-center hidden lg:flex">
              <LanguageSwitcher />
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
