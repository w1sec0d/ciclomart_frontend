import React from 'react';
import IndividualProduct from '../../components/IndividualProduct';

const ProductGrid = ({ filteredBikes, bicicletas }) => {
    const bikesToShow = filteredBikes.length > 0 ? filteredBikes : bicicletas;
    
    return (
        <div className="w-full md:w-3/4">
            <IndividualProduct
                products={bikesToShow}
                title={'¡Encuentra tu próxima bicicleta!'}
                columns= {4}
                itemsPerPage={8}
            />
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                    {filteredBikes.length > 0 
                        ? `${filteredBikes.length} ${filteredBikes.length === 1 ? 'bicicleta encontrada' : 'bicicletas encontradas'}` 
                        : `${bicicletas.length} ${bicicletas.length === 1 ? 'bicicleta disponible' : 'bicicletas disponibles'}`
                    }
                </span>
            </div>
        </div>
    );
};

export default ProductGrid;