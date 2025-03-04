import React, { useState } from 'react'
import Button from '../Button'
import bikeIcon from '../../assets/bikeIcon.png'
import sparePartIcon from '../../assets/sparePartIcon.png'

const ProductSelect = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center lg:min-h-screen bg-gradient-to-t from-primary/95 to-zinc-100 from-50% to-50% relative p-4">
      <h1 className="text-3xl font-bold mb-9">¿Qué quieres publicar?</h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24 items-center justify-center">
        <div className="w-40 h-40">
          <Button
            onClick={() => onSelect('bicicleta')}
            className="flex flex-col items-center justify-center bg-white text-black font-bold shadow-xl px-6 py-2 rounded-lg hover:bg-dgray w-full h-full"
          >
            <img src={bikeIcon} alt="Bicycle" className="w-full h-full" />
            Bicicleta
          </Button>
        </div>
        <div className="w-40 h-40">
          <Button
            onClick={() => onSelect('componente')}
            className="flex flex-col items-center justify-center bg-white text-black font-bold shadow-xl px-6 py-2 rounded-lg hover:bg-dgray w-full h-full"
          >
            <img
              src={sparePartIcon}
              alt="Spare Part"
              className="w-full h-full mb-4"
            />
            Repuesto
          </Button>
        </div>
      </div>
    </div>
  )
}
export default ProductSelect
