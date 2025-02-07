import React, { useState } from "react";
import Button from "../Button";
import bikeIcon from "../../assets/bikeIcon.png";
import sparePartIcon from "../../assets/sparePartIcon.png";

const ProductSelect = ({ onSelect }) => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-8">¿Qué quieres publicar?</h1>
        <div className="flex space-x-4"> {/* Flex container for buttons */}
          <Button
            onClick={() => onSelect("bicicleta")}
            className="flex items-center justify-center bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            <img
              src= {bikeIcon} // Bicycle icon
              alt="Bicycle"
              className="w-6 h-6 mr-2"
            />
            Bicicleta
          </Button>
          <Button
            onClick={() => onSelect("repuesto")}
            className="flex items-center justify-center bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            <img
              src= {sparePartIcon}// Spare part icon
              alt="Spare Part"
              className="w-6 h-6 mr-2"
            />
            Repuesto
          </Button>
        </div>
      </div>
    );
  };
export default ProductSelect;