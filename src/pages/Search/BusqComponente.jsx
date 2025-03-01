import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux'

import { getComponentes } from '../../services/productService';
import bikeIcon from '../../assets/bikeIcon.png';
import IndividualProduct from '../../components/IndividualProduct';

import { setLoading, clearLoading } from '../../store/slices/loadingSlice'

const BicycleComponentFinder = () => {

    const dispatch = useDispatch()
    // Estado para el componente seleccionado
    const [selectedComponent, setSelectedComponent] = useState(null);
    // Datos de ejemplo para componentes de bicicleta
    const {
        data: componentes,
        isError,
        isLoading,
    } = useQuery(['ofertas'], getComponentes)
    
    console.log(componentes)

    useEffect(() => {
        if (isLoading) {
            dispatch(setLoading())
        } else {
            dispatch(clearLoading())
        }
        }, [isLoading, dispatch])

    if (isLoading) return null
    if (isError) return <p>Error: {isError.message}</p>
  
    // Función para manejar el clic en un componente
    const handleComponentClick = (componentId) => {
        setSelectedComponent(componentId);
    };

    const normalizeString = (string) => 
        string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    const filteredComponentes = selectedComponent
    ? componentes.filter((componente) => componente.categoria === selectedComponent || normalizeString(componente.categoria) === normalizeString(selectedComponent))
    : [];
  
  return (
    <>
        <h1 className="text-3xl font-bold text-center pt-8 mt-8">Encuentra los componentes para tu bicicleta</h1>
        <div className="flex flex-col md:flex-row p-2 w-full mx-auto">
            
            {/* Panel de imagen interactiva */}
            <div className="w-full">
                {/* Instrucciones */}
                
                <div className="bg-primary bg-opacity-50 m-1 h-full flex flex-col items-center shadow pb-8 ">
                    
                {/* Contenedor de la imagen y los hotspots */}
                    <div className="relative w-full max-w-lg mx-auto">
                        {/* Imagen de bicicleta */}
                        <img
                        src={bikeIcon}
                        alt="Bicicleta de montaña"
                        className="opacity-80 ">
                        </img>
                        {/* Áreas interactivas (hotspots) */}
                        <button 
                        className={`absolute bottom-40 left-16 w-20 h-20 rounded-full ${selectedComponent === 'wheels' ? 'bg-tertiary opacity-40' : 'bg-tertiary opacity-20 hover:opacity-40'}`}
                        onClick={() => handleComponentClick('Neumáticos')}
                        aria-label="Ruedas delanteras"
                        />
                        
                        <button 
                        className={`absolute bottom-40 right-16 w-20 h-20 rounded-full ${selectedComponent === 'wheels' ? 'bg-tertiary opacity-40' : 'bg-tertiary opacity-20 hover:opacity-40'}`}
                        onClick={() => handleComponentClick('Neumáticos')}
                        aria-label="Ruedas traseras"
                        />

                        <button 
                        className={`absolute bottom-64 right-28 w-12 h-12 rounded-full ${selectedComponent === 'wheels' ? 'bg-tertiary opacity-40' : 'bg-tertiary opacity-20 hover:opacity-40'}`}
                        onClick={() => handleComponentClick('Suspensión')}
                        aria-label="Ruedas delanteras"
                        />
                        
                        <button 
                        className={`absolute top-28 right-8 -translate-x-1/2 w-16 h-24 rounded-full ${selectedComponent === 'handlebars' ? 'bg-secondary opacity-40' : 'bg-secondary opacity-20 hover:opacity-40'}`}
                        onClick={() => handleComponentClick('Manubrios')}
                        aria-label="Manillar"
                        />

                        <button 
                        className={`absolute top-28 right-28 -translate-x-1/2 w-12 h-12 rounded-full ${selectedComponent === 'handlebars' ? 'bg-secondary opacity-40' : 'bg-secondary opacity-20 hover:opacity-40'}`}
                        onClick={() => handleComponentClick('Frenos')}
                        aria-label="Manillar"
                        />
                        
                        <button 
                        className={`absolute top-24 left-24 translate-x-4 w-32 h-12 rounded-full ${selectedComponent === 'saddle' ? 'bg-tertiary opacity-40' : 'bg-tertiary opacity-20 hover:opacity-40'}`}
                        onClick={() => handleComponentClick('Sillines')}
                        aria-label="Sillín"
                        />
                        
                        <button 
                        className={`absolute bottom-32 left-60 -translate-x-8 w-12 h-8 rounded-full ${selectedComponent === 'pedals' ? 'bg-tertiary opacity-40' : 'bg-tertiary opacity-20 hover:opacity-40'}`}
                        onClick={() => handleComponentClick('Pedales')}
                        aria-label="Pedales"
                        />

                        <button 
                        className={`absolute bottom-44 left-60 -translate-x-8 w-12 h-12 rounded-full ${selectedComponent === 'pedals' ? 'bg-secondary opacity-40' : 'bg-secondary opacity-20 hover:opacity-40'}`}
                        onClick={() => handleComponentClick('Transmisión')}
                        aria-label="Pedales"
                        />
                        
                        {/* <button 
                        className={`absolute top-32 right-40 w-12 h-12 rounded-full ${selectedComponent === 'brakes' ? 'bg-purple-500 opacity-40' : 'bg-purple-300 opacity-20 hover:opacity-40'}`}
                        onClick={() => handleComponentClick('brakes')}
                        aria-label="Frenos"
                        /> */}
                    </div>

                    <div className="h-full flex items-center justify-center text-gray-500">
                        <p className="text-center text-bold text-xl">
                        Selecciona un componente de la bicicleta para ver los productos disponibles
                        </p>
                    </div>
                </div>

                
            </div>
        
            {/* Panel de productos */}
            <div className="w-full md:w-1/2 bg-white rounded-lg p-1 h-full">
                {selectedComponent ? (
                <>
                    <IndividualProduct 
                        products={filteredComponentes}
                        title = {selectedComponent}/>
                </>
                ) : (
                    null
                )}
            </div>
        </div>
    </>
  );
};

export default BicycleComponentFinder;