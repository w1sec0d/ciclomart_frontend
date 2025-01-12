import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'

const Verificacion = () => {

    const {
        register,
        handleSubmit,
        reset,
    } = useForm()


    return (
        
        <div className= "flex items-center justify-center min-h-screen bg-gray-100">
            <div className = "bg-white p-8 rounded shadow-md w-400 max-w-4xl">
                <h1 className="font-black text-5xl text-center"> Verificación</h1>
                <p className = "text-center mt-3"> Ingresa el código enviado a tu correo electrónico para continuar </p>
                <form>
                <Input
                    id="codigo"
                    label="Codigo de verificacion"
                    type="number"
                    {...register('number', { required: true })}
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