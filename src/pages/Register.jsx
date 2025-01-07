// Images
import registerImage from '../assets/register.png'
import logo from '../assets/logo.png'
import Input from '../components/Input'

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('hi')
  }

  return (
    <section className="flex flex-col md:flex-row">
      <div className="bg-white md:w-3/5 p-8">
        <img src={logo} alt="Logo de CicloMart" className="w-14 h-14 mb-5" />
        <h1 className="font-black text-5xl">Únete a CicloMart</h1>
        <p>Crea una cuenta gratuita o inicia sesión</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input id="email" label="Correo electrónico" type="email" />
          <div className="flex gap-4">
            <Input id="name" label="Nombres" className="w-1/2" />
            <Input id="surname" label="Apellidos" className="w-1/2" />
          </div>
          <Input id="password" label="Contraseña" type="password" />
          <Input
            id="password-confirm"
            label="Confirmar contraseña"
            type="password"
          />
          <input type="checkbox" id="terms" />
          <div>
            <label htmlFor="terms">Acepto los términos y condiciones</label>
            <button type="submit">Continuar</button>
          </div>
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
