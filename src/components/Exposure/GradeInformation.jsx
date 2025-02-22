const GradeInformation = ({ grade }) => {
  return (
    <div
      className={`${grade % 2 === 0 ? 'border-t-tertiary' : 'border-t-primary'} border-t py-8 px-4`}
    >
      <b className={`${grade % 2 === 0 ? 'text-tertiary' : 'text-primary'}`}>
        GRADO {grade}
      </b>
      <p className="mt-2">
        {' '}
        Es el grado por defecto de las publicaciones realizadas en CicloMart
        para vendedores que no se encuentran asociados a ningún plan de pago.
        Estas publicaciones aparecen por detrás de productos con los demás
        grados de exposición tanto en búsquedas como en las secciones de su
        publicación. 
      </p>
    </div>
  )
}

export default GradeInformation
