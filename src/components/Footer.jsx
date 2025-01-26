import { forwardRef } from 'react'

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="w-full bg-primary">
      <div className="container mx-auto py-4">
        <p className="text-center text-white">
          &copy; 2025 - Todos los derechos reservados
        </p>
        {/* Create an email support */}
        <p className="text-center text-white">
          Soporte:
          <a
            href="mailto:cramirezmun@unal.edu.co"
            className="text-secondary font-bold"
          >
            {' '}
            cramirezmun@unal.edu.co
          </a>
        </p>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
