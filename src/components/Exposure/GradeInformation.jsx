const GradeInformation = ({ grade }) => {
  const gradeDescription = [
    'Es el grado por defecto de las publicaciones realizadas en CicloMart para vendedores que no se encuentran asociados a ningún plan de pago. Estas publicaciones aparecen por detrás de productos con los demás grados de exposición tanto en búsquedas como en las secciones de su publicación.',
    'Las publicaciones con este grado de exposición estarán por encima de aquellas con grado 0 tanto en búsquedas como en las secciones de su publicación y estarán  por debajo de aquellas con  grados 2, 3 y 4. ',
    'Las publicaciones con este grado de exposición  tendrán prioridad sobre aquellas de grado 1 y 0 y estarán por debajo de las de grado 3 y 4. ',
    'Las publicaciones con este grado de exposición tendrán prioridad sobre aquellas de grado 0,1 y 2 tanto en su aparición en las secciones principales como en las búsquedas y estarán por debajo de las de grado  4.',
    'Ofrece la máxima exposición en su sección asociada. Estas publicaciones aparecerán en la sección de "Recomendados" en la página de inicio y aparecerán por encima de los demás productos en la sección de búsqueda.',
  ]

  return (
    <div
      className={`${grade % 2 === 0 ? 'border-t-tertiary' : 'border-t-primary'} border-t py-8 px-4`}
    >
      <b className={`${grade % 2 === 0 ? 'text-tertiary' : 'text-primary'}`}>
        GRADO {grade}
      </b>
      <p>{gradeDescription[grade]}</p>
    </div>
  )
}

export default GradeInformation
