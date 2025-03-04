import { forwardRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="w-full bg-primary">
      <div className="flex flex-col h-full w-full">
        <div className="container mx-auto py-4 flex-row flex pl-6 text-white">
          <ul className="w-1/3 border-r border-primaryDark ">
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
          <ul className="w-1/3 ml-4 border-r border-primaryDark ">
            <h3 className="text-xl font-bold mb-4">Recursos</h3>
            <li className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Link
                  to="https://github.com/w1sec0d/CicloMart_Back"
                  target="_blanck"
                >
                  <div className="hover:text-secondary flex flex-row">
                    <p className="mr-2">Github BackEnd</p>
                    <FaGithub className="text-3xl" />
                  </div>
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  to="https://github.com/w1sec0d/CicloMart_front"
                  target="_blanck"
                >
                  <div className="hover:text-secondary flex flex-row">
                    <p className="mr-2">Github FrontEnd</p>
                    <FaGithub className="text-3xl" />
                  </div>
                </Link>
              </div>
            </li>
          </ul>
          <ul className="w-1/3 ml-4 ">
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
        <div className="py-4 w-full border-t border-primaryDark flex flex-row px-6">
          <p className="text-center text-white justify-start mr-auto">
            &copy; 2025 - Todos los derechos reservados
          </p>
          {/* Create an email support */}
          <p className="text-center text-white">
            Soporte:
            <Link
              to="mailto:cramirezmun@unal.edu.co"
              className="text-secondary font-bold"
            >
              {' '}
              cramirezmun@unal.edu.co
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
