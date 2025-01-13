import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'

import { setNotification } from '../store/slices/notificationSlice'
import { useDispatch } from 'react-redux'
import loginService from '../services/loginService'

const Verificacion = () => {

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = async (data) => {
        try {

        
    
        const request = await loginService.sendResetPasswordEmail(data.email);
        
        
    
        if (request.status === 200) {

            dispatch(
            setNotification({
                title: '¡Éxito!',
                text: 'Emos enviado un correo para recuperar la contraseña.',
                icon: 'success',
            })
            );
        }
        } catch (error) {
        if (error.response && error.response.status === 401) {
            dispatch(
            setNotification({
                title: '¡ups!',
                text: 'El correo debe ser el que registraste en la app.',
                icon: 'error',
            })
            );
        } else {
            console.error('Error:', error.message);
            dispatch(
            setNotification({
                title: 'Error',
                text: `Ocurrió un error: ${error.message}`,
                icon: 'error',
            })
            );
        }
        }
        reset();
    };


    return (
        
        <div className= "flex items-center justify-center min-h-screen bg-gray-100">
            <div className = "bg-white p-8 rounded shadow-md w-400 max-w-4xl">
                <h1 className="font-black text-5xl text-center"> Verificación</h1>
                <p className = "text-center mt-3"> Ingresa el correo que uso para registrarse </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                    id="email"
                    label="Correo electrónico"
                    type="email"
                    {...register('email', { required: true })}
                    />
                <div className = "mt-5">
                    <a href = "/register" className="text-sm text-blue-500 hover:underline"> 
                        No recibi el código
                    </a>
                </div>    
                <div className = "mt-1"> 
                    <a href = "/register" className="text-sm text-blue-500 hover:underline mt-3"> 
                        Usar telefono en su lugar
                    </a>
                </div>
                <div className='flex items-center justify-center mt-5'>
                        <Button type="submit" 
                                className='text-center bg-blue-500 text-white py-2 px-7 rounded-full'>
                                    verificar
                        </Button>
                </div>
                </form>
            </div>

        </div>
    )

}

export default Verificacion;