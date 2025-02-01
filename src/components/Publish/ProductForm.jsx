// src/components/ProductForm.js
import React, { useState } from "react";

const ProductForm = ({ type, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, details });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Publicar un {type}</h1>
      <form onSubmit={handleSubmit} className="w-80">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Titulo</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Detalles</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Publicar
        </button>
      </form>
    </div>
  );
};

export default ProductForm;