import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'




const Login = () =>{

    const {
        register
        //handleSubmit,
        //reset,
      } = useForm()

    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
                <h1 className="font-black text-5xl text-center" > Bienvenidos a CicloMart</h1>
                <p className="text-center mt-3">Por favor ingresa tus datos</p>
                <form className="flex flex-col gap-4">
                    <Input
                    id="email"
                    label="Correo electrónico"
                    type="email"
                    {...register('email', { required: true })}
                    />
                    <Input
                    id="password"
                    label="Contraseña"
                    type="password"
                    {...register('password', { required: true })}
                    />
                    <div className='flex items-center justify-between'>
                    <Checkbox id="terms" {...register('terms', { required: true })}>
                        Recuerdame
                    </Checkbox>
                    <a href="/register" className="text-sm text-blue-500 hover:underline">
                        ¿Has olvidado tu contraseña?
                    </a>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button type="submit" 
                                className='text-center bg-blue-500 text-white py-2 px-7 rounded-full'>
                                    Iniciar sesión
                        </Button>
                    </div>
                    <p className="text-center mt-3">
                        ¿No tienes una cuenta?{' '}
                        <a href="/register" className='text-blue-500 hover:underline'>Registrate</a>
                    </p>
                    
                </form>
            </div>
        </div>
    )
}
export default Login;
