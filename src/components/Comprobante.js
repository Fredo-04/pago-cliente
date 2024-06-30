// Comprobante.js
import React, { useState } from 'react';

const Comprobante = ({ onGenerateComprobante }) => {
  const [tipo, setTipo] = useState('');
  const [numero, setNumero] = useState('');

  const handleGenerate = () => {
    if ((tipo === 'boleta' && numero.length === 8 && !isNaN(numero)) ||
        (tipo === 'factura' && numero.length === 11 && !isNaN(numero))) {
      onGenerateComprobante(tipo, numero);
    } else {
      alert('Número de documento inválido');
    }
  };

  return (
    <div>
      <button onClick={() => setTipo('boleta')}>Boleta</button>
      <button onClick={() => setTipo('factura')}>Factura</button>
      {tipo && (
        <div>
          <input
            type="text"
            placeholder={`Número de ${tipo}`}
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <button onClick={handleGenerate}>Generar comprobante</button>
        </div>
      )}
    </div>
  );
};

export default Comprobante;
