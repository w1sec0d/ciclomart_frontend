import RatingView from "../components/RatingView";
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { FaStar, FaUpload } from "react-icons/fa";
import Input from '../components/Input';
import { useState, useRef } from "react";
import StarRating from "../components/StarRating";
import { setNotification } from "../store/slices/notificationSlice";
import { useDispatch } from "react-redux";

const ProductRating = (props) => {
    const descripcion = " Hola soy una descripcion daniel";
    const date = "2023-03-04";
    const nota = 0;

    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [image, setImage] = useState(null);
    const [error, setError] = useState('')
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();


    const validateFields = ( Comment, Rating) =>{

        if(!Comment || !Rating){
            dispatch(
                setNotification({
                    title: "¡UPS!",
                    text: "Califica con algúna estrella",
                    icon: "error",
                    timer: 3000
                })
            )
            return -1
        }
        return 0
    }

    const ImageUpload = (e) => {
        const file = e.target.files[0];
        if(file && file.type.startsWith('image/')){
            setImage(file);
            setError('');
        }else{
            dispatch(
                setNotification({
                    title: "¡UPS!",
                    text: "Selecciona un archivo de imagen válido",
                    icon: "error",
                    timer: 3000
                })
            )
        }
    }

    const onSubmit = async (data) => {
        // Maneja el envío del formulario
        if(validateFields(data.calificacion, rating) === 0){
            console.log("Yes");
            console.log(image);
        }


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
                <div className="flex  items-start space-x-12">
                    <div className="flex space-x-5 items-center">
                        <div className="text-7xl font-bold text-blue-500">{nota}</div>
                        <div className="flex flex-col">
                            <StarRating rating ={nota} size="star-large"/>
                            <p className="text-sm ">1 comentario</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <RatingView 
                        description={descripcion}
                        date={date}
                        rating={nota}
                        />
                        <RatingView 
                            description={descripcion}
                            date={date}
                            rating={nota}
                        />
                    </div>
                </div>
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
                <div className="flex justify-center items-center ">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-3xl gap-3">
                    <div className="flex flex-row items-center gap-4">
                            <div className="flex-grow">
                                <Input 
                                    id="calificacion"
                                    label="Ingresa tu comentario"
                                    type="textarea"
                                    {...register('calificacion', { required: false })}
                                    className="w-full"
                                />
                            </div>
                            <div className="relative flex items-center justify-center">
                                <div className="bg-gray-200 rounded-full cursor-pointer h-36 w-36 flex items-center justify-center" onClick={() => fileInputRef.current.click()}>
                                    {image ? (
                                        <img
                                            src={URL.createObjectURL(image)}
                                            className="transition duration-200 ease-in-out hover:scale-110 hover:opacity-80 hover:cursor-pointer w-36 h-36 rounded-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-center  flex items-center">
                                            <FaUpload className="mr-2" size={20}/> Subir Imagen
                                        </span>
                                    )}
                                    <input
                                        type="file"
                                        onChange={ImageUpload}
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                    />
                                </div>
                            </div>
                        </div>
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
