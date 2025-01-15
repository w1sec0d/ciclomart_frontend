// Images
import registerImage from '../assets/register.png'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="bg-white md:w-3/5 px-8 py-12">
        <RegisterForm />
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
