import React, { useState } from 'react';
import ProductoValidation from './components/ProductoValidation';
import Pago from './components/Pago';
import Comprobante from './components/Comprobante';
import GenerarComprobante from './components/GenerarComprobante';

const App = () => {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState([]);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleAddToCart = (producto) => {
    setCart([...cart, producto]);
    handleNextStep(); // Avanzar al siguiente paso después de añadir al carrito
  };

  const handleSelectPago = (tipo, data) => {
    handleNextStep(); // Avanzar al siguiente paso después de seleccionar el pago
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ProductoValidation onNextStep={handleNextStep} onAddToCart={handleAddToCart} />;
      case 2:
        return <Pago onNextStep={handleNextStep} onSelectPago={handleSelectPago} />;
      case 3:
        return <Comprobante onNextStep={handleNextStep} />;
      case 4:
        return <GenerarComprobante data={{}} />;
      default:
        return <ProductoValidation onNextStep={handleNextStep} onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="App">
      {renderStep()}
      {step === 1 && cart.length > 0 && (
        <div>
          <h2>Carrito</h2>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.nombre}</td>
                  <td>{producto.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleNextStep}>Pagar</button>
        </div>
      )}
    </div>
  );
};

export default App;
