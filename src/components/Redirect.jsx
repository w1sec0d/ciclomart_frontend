import { HashLink } from 'react-router-hash-link'

const Redirect = ({ section, name, idProducto }) => {
  //Para mover la página a una sección ignorando el navbar
  const scrollOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY
    const yOffset = -80
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }
  return (
    <HashLink
      smooth
      to={`/product/${idProducto}/#${section}`}
      className="border-b border-primary hover:cursor-pointer text-primary font-bold"
      scroll={(el) => scrollOffset(el)}
    >
      {name}
    </HashLink>
  )
}

export default Redirect
