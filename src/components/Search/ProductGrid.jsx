import React from 'react';
import IndividualProduct from '../../components/IndividualProduct';

const ProductGrid = ({ filteredBikes, bicicletas }) => {
    const bikesToShow = filteredBikes.length > 0 ? filteredBikes : bicicletas;
    
    return (
        <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">¡Encuentra tu próxima bicicleta!</h2>
                <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                    {filteredBikes.length > 0 
                        ? `${filteredBikes.length} ${filteredBikes.length === 1 ? 'bicicleta encontrada' : 'bicicletas encontradas'}` 
                        : `${bicicletas.length} ${bicicletas.length === 1 ? 'bicicleta disponible' : 'bicicletas disponibles'}`
                    }
                </span>
            </div>
            
            <IndividualProduct
                products={bikesToShow}
                title={''}
            />
        </div>
    );
};

export default ProductGrid;