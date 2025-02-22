const ExposureInfo = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="bg-secondary h-14 w-full mt-10 flex items-center justify-center drop-shadow-lg">
        <h1 className="text-xl font-bold">
          Elije un nivel de exposición para resaltar tus productos
        </h1>
      </div>

      <div className="flex flex-col h-auto w-full mt-8 mb-8">
        <div>
          <h2 className="font-bold bg-tertiary py-3 px-3  rounded-tr-xl w-64 drop-shadow-lg">
            GRADOS DE EXPOSICIÓN
          </h2>
        </div>
        <div className="mt-4 font-light">
          <p>
            Los grados de exposición son útiles para posicionar la publicación
            de un producto (bicicletas, repuesto y artículo de ciclismo) en las
            secciones principales de CicloMart (sección de bicicletas, repuesto
            u ofertas) por encima de otras publicaciones con un grado de
            exposición menor. Además también son útiles para ordenar el orden de
            aparición de los productos en la sección de búsqueda de productos.{' '}
            <p className="inline-block text-primary font-bold">
              ¡Consulta nuestros formas de pago y selecciona una que se ajuste a
              lo que buscas!{' '}
            </p>
          </p>
        </div>
      </div>

      <div className=" bg-lgray/[.37] w-full h-auto ">
        <div className="mb-20">
          <h2 className="bg-primary inline-block opacity-100 py-3 px-3 font-bold rounded-tr-xl w-64 drop-shadow-lg ">
            FORMAS DE PAGO
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 pb-8 px-8">
          <div className="bg-white h-60 w-full rounded-xl flex flex-col items-center shadow-xl">
            <div className="w-full bg-primary h-16 rounded-t-xl flex items-center justify-center mb-4 drop-shadow-lg">
              <h3 className="font-bold">Grado 1</h3>
            </div>
            <b className="text-primary text-2xl">3% del valor de tu producto</b>
            <div className="h-full w-full flex justify-center px-8">
              <ul className="list-disc">
                <li>
                  Nivel de exposición grado 1 para bicicletas y repuestos en
                  publicaciones y búsquedas.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white h-60 w-full"></div>
          <div className="bg-white h-60 w-full"></div>
          <div className="bg-white h-60 w-full"></div>
        </div>
      </div>
    </div>
  )
}

export default ExposureInfo
