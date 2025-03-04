import { forwardRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="w-full bg-primary">
      <div className="flex flex-col h-full w-full">
        <div className="container mx-auto py-4 flex flex-col md:flex-row pl-6 text-white">
          <ul className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-primaryDark md:mb-0 py-6 md:py-0">
            <h3 className="text-xl font-bold mb-4">Legalidad</h3>
            <li>
              <Link to="/terms" className="hover:text-secondary">
                Terminos y condiciones
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-secondary">
                Politica de datos
              </Link>
            </li>
          </ul>
          <ul className="w-full md:w-1/3 md:ml-4 border-b md:border-b-0 md:border-r border-primaryDark mb-4 md:mb-0 py-6 md:py-0">
            <h3 className="text-xl font-bold mb-4">Recursos</h3>
            <li className="flex items-center flex-col justify-center">
              <div className="flex items-center w-full">
                <Link
                  to="https://github.com/w1sec0d/CicloMart_Back"
                  target="_blanck"
                >
                  <div className="hover:text-secondary flex flex-row justify-center items-center">
                    <p className="mr-2">Github BackEnd</p>
                    <FaGithub className="text-3xl" />
                  </div>
                </Link>
              </div>
              <div className="flex items-center w-full mt-6">
                <Link
                  to="https://github.com/w1sec0d/CicloMart_front"
                  target="_blanck"
                >
                  <div className="hover:text-secondary flex flex-row justify-center items-center">
                    <p className="mr-2">Github FrontEnd</p>
                    <FaGithub className="text-3xl" />
                  </div>
                </Link>
              </div>
            </li>
          </ul>
          <ul className="w-full md:w-1/3 md:ml-4 py-6 md:py-0">
            <h3 className="text-xl font-bold mb-4">Responsables</h3>
            <li>
              <Link
                to={'https://github.com/w1sec0d'}
                className="hover:text-secondary"
                target="_blanck"
              >
                Carlos David Ramírez Muñoz
              </Link>
            </li>
            <li>
              <Link
                to={'https://github.com/Homeroso'}
                className="hover:text-secondary"
                target="_blanck"
              >
                Johan David Rodríguez Gutíerrez
              </Link>
            </li>
            <li>
              <Link
                to={'https://github.com/RonaldDaniel20'}
                className="hover:text-secondary"
                target="_blanck"
              >
                Ronald Daniel Jacanamejoy Mutumbajoy
              </Link>
            </li>
            <li>
              <Link
                to={'https://github.com/JuMad-SE'}
                className="hover:text-secondary"
                target="_blanck"
              >
                Juan David Madrid Contreras
              </Link>
            </li>
          </ul>
        </div>
        <div className="py-4 w-full border-t border-primaryDark flex flex-col md:flex-row px-6">
          <p className="text-center text-white md:justify-start md:mr-auto mb-4 md:mb-0">
            &copy; 2025 - Todos los derechos reservados
          </p>
          <p className="text-center text-white">
            Soporte:
            <Link
              to="mailto:ciclomartsoporte@gmail.com"
              className="text-secondary font-bold"
            >
              {' '}
              ciclomartsoporte@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
