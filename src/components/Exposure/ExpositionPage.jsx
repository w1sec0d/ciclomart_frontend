//Componentes
import ExposurePrice from './ExposurePrice'

//Utilidades
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ExpositionPage = ({ product }) => {
  const [selected, setSelected] = useState()
  return (
    <div className="mb-6">
      <p className="mb-6 mx-[-40px] text-center">
        {' '}
        Aquí podras seleccionar el nivel de exposición para tu producto,{' '}
        <b>por defecto se establecerá en 0</b>, sin embargo puedes utilizar
        alguna de las siguientes opciones, de acuerdo a tu necesidad.
        <Link
          className="inline-block text-primary font-bold"
          to={'/ExposureInfo'}
          target="_blank"
        >
          Click aquí para mayor información
        </Link>
      </p>

      <div className="grid grid-cols-2 gap-4 ">
        <ExposurePrice
          grade={1}
          price={product.precio}
          setSelected={setSelected}
          selected={selected}
        />
        <ExposurePrice
          grade={2}
          price={product.precio}
          setSelected={setSelected}
          selected={selected}
        />
        <ExposurePrice
          grade={3}
          price={product.precio}
          setSelected={setSelected}
          selected={selected}
        />
        <ExposurePrice
          grade={4}
          price={product.precio}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <p className="mt-4 text-center text-tertiary font-bold">
        Solo se te cobrara una vez publiques el producto
      </p>
    </div>
  )
}

export default ExpositionPage
