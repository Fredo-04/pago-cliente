import React, { useState } from 'react';

const ProductoValidation = ({ onNextStep, onAddToCart }) => {
  const [codigo, setCodigo] = useState('');
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState('');

  const handleValidate = () => {
    if (codigo.length !== 4 || isNaN(codigo)) {
      setError('Debe ser un número de 4 dígitos');
      return;
    }
    setError('');
    // Simulación de la validación del producto
    setProducto({ nombre: 'Galleta', estado: 'Disponible', precio: 1.5 });
    onNextStep();
  };

  return (
    <div>
      <label>Cd. producto:</label>
      <input
        type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <button onClick={handleValidate}>Validar</button>
      {error && <p>{error}</p>}
      {producto && (
        <div>
          <p>Producto: {producto.nombre}</p>
          <p>Estado: {producto.estado}</p>
          <button onClick={() => onAddToCart(producto)}>Añadir a la compra</button>
        </div>
      )}
    </div>
  );
};

export default ProductoValidation;
