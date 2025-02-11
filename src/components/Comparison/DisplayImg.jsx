//Componentes
import Img from '../Img'

const DisplayImg = ({ product }) => {
  return (
    <div className="w-1/2 bg-white h-full  border-r border-r-lgray flex flex-col items-center pt-4 ">
      <b>{product.nombre}</b>
      <div className="h-full w-full flex flex-col mt-2 items-center ">
        <Img
          src={product.imagenURL}
          alt={product.nombre}
          className={'h-[200px] w-[300px]'}
        />
      </div>
    </div>
  )
}

export default DisplayImg
