import RatingView from "../components/RatingView";
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { FaStar } from "react-icons/fa";
import Input from '../components/Input';
import { useState } from "react";

const ProductRating = (props) => {
    const descripcion = " Hola soy una descripcion daniel";
    const date = "2023-03-04";
    const nota = 2;
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const onSubmit = async (data) => {
        // Maneja el envío del formulario
        console.log(data);
        console.log(rating);
    };

    const StartGenerate = () =>{
        
        return (
            <div className="Calificacion_Start items-center flex-col flex mt-4">
                <div className="flex">
                {[...Array(5)].map((start, index) =>{
                    const currentRating = index + 1
                    return (
                     <label className="inline-block" key={index}>
                        <input 
                            type="radio" 
                            name="rating" 
                            value = {currentRating}
                            onClick={() => setRating(currentRating)}
                            className="hidden"
                        />
                        <FaStar 
                            className="StartRating cursor-pointer" 
                            size={30} 
                            color={currentRating <= (hover || rating) ? "#ffc107":"#e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                     </label>
                    )
                })}
                </div>
                <div>
                    <p className="mt-2">Tu calificación es {rating}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-screen-minus-navbar px-8 py-12 overflow-auto">
            <h2 className="font-black text-2xl">
                {' '}
                Opiniones del producto
            </h2>
            <div className="mt-4">
                <RatingView 
                    description={descripcion}
                    date={date}
                    rating={nota}
                />
            </div>
            <h2 className="py-2 font-black text-2xl">
                ¿Tienes dudas del producto?
            </h2>
            <p>Puedes iniciar chat con el vendedor</p>
            <div className="py-4">
                <Button
                    type="button"
                    className="text-center py-1 px-2 bg-blue-500 text-white rounded"
                    to="/login"
                >
                    Iniciar chat
                </Button>
            </div>
            <div className="py-1">
                <h2 className="py-2 font-black text-2xl">
                    Deja tú comentario
                </h2>
                <div className="flex justify-center items-center mt-1">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-3xl gap-4">
                        <Input 
                            id="calificacion"
                            label="Ingresa tú calificacion"
                            type="textarea"
                            {...register('calificacion', { required: false })}
                        />
                        <div className="mt-1 ">
                            <StartGenerate/>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button
                                type="submit"
                                className="text-center bg-blue-500 text-white py-2 px-7 rounded-full"
                            >
                                Enviar
                            </Button>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    );
}

export default ProductRating;
