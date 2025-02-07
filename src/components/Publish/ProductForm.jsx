// src/components/ProductForm.js
import React, { useState } from "react";
import BycicleForm from "./BycicleForm";
import SparePartForm from "./SparePartForm";

const ProductForm = ({ type, onSubmit }) => {
  console.log(type);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e, data) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Publicar {type}</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 mb-4">
              <div className="flex-1 justify-end mt-4">
                {type === "bicicleta" && <BycicleForm onSubmit={onSubmit}/>}
                {type === "repuesto" && <SparePartForm onSubmit={onSubmit}/>}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductForm;