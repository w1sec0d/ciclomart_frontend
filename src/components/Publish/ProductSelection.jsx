import React, { useState } from 'react'
import Button from '../Button'
import bikeIcon from '../../assets/bikeIcon.png'
import sparePartIcon from '../../assets/sparePartIcon.png'

const ProductSelect = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-primary/95 to-zinc-100 from-50% to-50% relative">
      <h1 className="text-3xl font-bold mb-9 absolute top-20">
        ¿Qué quieres publicar?
      </h1>
      <div className="flex space-x-24 items-center justify-center">
        {' '}
        {/* Flex container for buttons */}
        <div className="size-40 ">
          <Button
            onClick={() => onSelect('bicicleta')}
            className="flex flex-col items-center justify-center bg-white text-black font-bold shadow-xl px-6 py-2 rounded-lg hover:bg-dgray h-full w-full"
          >
            <img
              src={bikeIcon} // Bicycle icon
              alt="Bicycle"
              className="w-full h-full  "
            />
            Bicicleta
          </Button>
        </div>
        <div className="size-40 ">
          <Button
            onClick={() => onSelect('bicicleta')}
            className="flex flex-col items-center justify-center bg-white text-black font-bold shadow-xl px-6 py-2 rounded-lg hover:bg-dgray h-full w-full"
          >
            <img
              src={sparePartIcon} // Bicycle icon
              alt="Bicycle"
              className="h-full w-full mb-4"
            />
            Repuesto
          </Button>
        </div>
      </div>
    </div>
  )
}
export default ProductSelect
