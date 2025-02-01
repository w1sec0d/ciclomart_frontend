import React, { useState } from "react";

const Verification = ({ onVerify }) => {
  const [verificationCode, setVerificationCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(verificationCode);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Verificar propiedad de la bicicleta</h1>
      <form onSubmit={handleSubmit} className="w-80">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Código de verificación
          </label>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Verification;