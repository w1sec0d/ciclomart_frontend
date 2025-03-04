import { forwardRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="w-full bg-primary">
      <div className="flex flex-col h-full w-full">
        <div className="container mx-auto py-4 flex flex-col md:flex-row pl-6 text-white">
          <ul className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-primaryDark mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Legalidad</h3>
            <li>Terminos y condiciones</li>
            <li>Política de datos</li>
          </ul>
          <ul className="w-full md:w-1/3 md:ml-4 border-b md:border-b-0 md:border-r border-primaryDark mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Recursos</h3>
            <li className="flex items-center">
              <p className="mr-2">Github</p>
              <FaGithub className="text-3xl" />
            </li>
          </ul>
          <ul className="w-full md:w-1/3 md:ml-4">
            <h3 className="text-xl font-bold mb-4">Responsables</h3>
            <li>Carlos David Ramírez Muñoz</li>
            <li>Johan David Rodríguez Gutíerrez</li>
            <li>Ronald Daniel Jacanamejoy Mutumbajoy</li>
            <li>Juan David Madrid Contreras</li>
          </ul>
        </div>
        <div className="py-4 w-full border-t border-primaryDark flex flex-col md:flex-row px-6">
          <p className="text-center text-white md:justify-start md:mr-auto mb-4 md:mb-0">
            &copy; 2025 - Todos los derechos reservados
          </p>
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
