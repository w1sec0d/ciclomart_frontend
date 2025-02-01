import React, { useState } from "react";

const ProductSelect = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">¿Qué quieres publicar?</h1>
      <button
        onClick={() => onSelect("bicicleta")}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg mb-4 hover:bg-blue-600"
      >
        Bicicleta
      </button>
      <button
        onClick={() => onSelect("repuesto")}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
      >
        Repuesto
      </button>
    </div>
  );
};

export default ProductSelect;