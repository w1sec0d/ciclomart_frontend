const ExposureInfo = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="bg-secondary h-14 w-full mt-10 flex items-center justify-center shadow-lg">
        <h1 className="text-xl font-bold">
          Elije un nivel de exposición para resaltar tus productos
        </h1>
      </div>

      <div className="flex flex-col h-auto w-full mt-3">
        <div>
          <h2 className="font-bold bg-tertiary py-2 px-3 inline-block rounded-tr-xl">
            Grados de exposición
          </h2>
        </div>
        <div className="my-4 font-light">
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
    </div>
  )
}

export default ExposureInfo
