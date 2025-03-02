import { PedalBike } from '@mui/icons-material'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

// Componente que renderiza una imagen con un icono de bicicleta en caso de que no haya una imagen
const Img = ({ src, className, ...props }) => {
  if (src) {
    return (
      <img
        src={src}
        {...props}
        className={twMerge('object-contain max-h-[200px]', className)}
      />
    )
  }
  return <PedalBike sx={{ fontSize: 100 }} color="disabled" />
}

Img.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
}

export default Img
