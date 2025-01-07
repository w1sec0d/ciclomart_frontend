const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('hi')
  }

  return (
    <section className="flex flex-col md:flex-row">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" />
          <div>
            <label htmlFor="name">Nombres</label>
            <input type="name" id="name" />
            <label htmlFor="surname">Apellidos</label>
            <input type="surname" id="surname" />
          </div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" />
          <label htmlFor="password-confirm">Confirmar contraseña</label>
          <input type="password" id="password-confirm" />
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Acepto los términos y condiciones</label>
          <button type="submit">Registrarse</button>
        </form>
      </div>
      <div></div>
    </section>
  )
}

export default Register
