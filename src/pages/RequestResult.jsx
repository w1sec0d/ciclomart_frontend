// Componente que muestra el resultado de una solicitud
// Como una compra, un cambio de contraseña, e.t.c
const RequestResult = ({
  message = 'Operación realizada con éxito',
  success = true,
}) => {
  return (
    <section className="flex flex-col justify-center">
      <h1>{message}</h1>
    </section>
  )
}

export default RequestResult
