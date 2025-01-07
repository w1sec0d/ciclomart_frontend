// Images
import registerImage from '../assets/register.png'
import logo from '../assets/logo.png'

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('hi')
  }

  return (
    <section className="flex flex-col md:flex-row">
      <div className="bg-white md:w-3/5 p-8">
        {/* form paragaph */}
        <h1 className="font-black text-4xl">Únete a CicloMart</h1>
        <p>Crea una cuenta gratuita o inicia sesión</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <button type="submit">Continuar</button>
        </form>
      </div>
      <div className="bg-primary md:w-2/5">
        <img
          src={registerImage}
          alt="Imagen de una persona sonriendo en una bicicleta y saludando"
        />
      </div>
    </section>
  )
}

export default Register
