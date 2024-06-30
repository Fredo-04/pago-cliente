// Pago.js
import React, { useState } from 'react';

const Pago = ({ onSelectPago }) => {
  const [pagoTarjeta, setPagoTarjeta] = useState(false);
  const [numTarjeta, setNumTarjeta] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePagoTarjeta = () => {
    if (numTarjeta.length === 16 && cvv.length === 3 && !isNaN(numTarjeta) && !isNaN(cvv)) {
      onSelectPago('tarjeta', { numTarjeta, cvv });
    } else {
      alert('Datos de tarjeta inválidos');
    }
  };

  return (
    <div>
      <button onClick={() => onSelectPago('efectivo')}>Pago en efectivo</button>
      <button onClick={() => setPagoTarjeta(true)}>Pago con tarjeta</button>
      {pagoTarjeta && (
        <div>
          <input
            type="text"
            placeholder="Número de tarjeta"
            value={numTarjeta}
            onChange={(e) => setNumTarjeta(e.target.value)}
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
          <button onClick={handlePagoTarjeta}>Aceptar</button>
        </div>
      )}
    </div>
  );
};

export default Pago;
