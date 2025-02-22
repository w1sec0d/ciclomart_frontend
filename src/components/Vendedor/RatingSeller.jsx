import { FaStar } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Photo from '../../assets/userPhoto.png'
import { useState } from "react";


const RatingSeller = ({ description, date, rating, image, idProducto, nombreComprador, apellidoComprador, imageCom }) => {

    const formattedDate = new Date(date).toLocaleDateString()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleImageClick = () => {
        setIsModalOpen(true)
    } 

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className='flex  flex-col space-y-4 w-full mt-3'>
            <div className="flex flex-row space-x-6 items-center ">
                <h2 className="text-1xl font-bold ">Cumplido y confiable</h2>
                <div className="flex space-x-1">
                    <FaStar 
                        size={26}
                        color="#ffc107"
                    />
                    <p className="text-1xl ">{rating} <strong className='text-green-700'>Estrellas</strong></p>
                </div>
                <div className="flex space-x-1">
                    <FaClockRotateLeft size={24} color="#559234" />
                    <p className="text-1xl">Fecha de publicación: {formattedDate}</p>
                </div>
            </div>
            <div className="flex flex-row mt-2">
                <img src={imageCom || Photo} alt="Foto Comprador" className="w-28 h-28 rounded-full flex-shrink-0" />
                <div className="flex-grow mx-10 space-y-2">
                    <p className="whitespace-normal break-words">{description}</p>
                    <Link className="text-sm text-blue-500" to={`/product/${idProducto}`}>Ver producto</Link>
                    <p className="font-bold italic">-{nombreComprador} {apellidoComprador}</p>
                </div>
                {image && (
                    <img 
                        src={image} 
                        alt="Foto Producto" 
                        className="w-28 h-28 flex-shrink-0 object-cover cursor-pointer"
                        onClick={handleImageClick}
                    /> 
                )}
                {isModalOpen && (
                    <div> 
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="absolute inset-0 bg-black opacity-70" onClick={handleCloseModal}></div>
                            <div className="relative p-2 rounded-lg shadow-lg max-w-3xl max-h-full">
                                <img 
                                    src={image} 
                                    alt="Imagen de un producto ampliada" 
                                    className="w-full h-full object-contain max-h-[80vh] max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RatingSeller;
