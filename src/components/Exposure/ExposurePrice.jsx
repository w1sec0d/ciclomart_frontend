const ExposurePrice = ({ grade, percentage, children }) => {
  return (
    <div className="bg-white h-60 w-full rounded-xl flex flex-col items-center shadow-xl">
      <div className="w-full bg-primary h-28   rounded-t-xl flex items-center justify-center mb-4 drop-shadow-lg">
        <h3 className="font-bold">Grado {grade}</h3>
      </div>
      <div className="h-full w-full flex flex-col justify-center items-center pt-2">
        <b className="text-primary text-2xl mb-3">
          {percentage}% del valor de tu producto
        </b>
        <p className="text-center mb-2">
          Nivel de exposición grado {grade} para bicicletas y repuestos en
          publicaciones y búsquedas.
        </p>
        {children}
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-primary w-2/3 mb-6 h-8 rounded-xl font-bold border-black">
          ¡Pruebalo!
        </button>
      </div>
    </div>
  )
}

export default ExposurePrice
