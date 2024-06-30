// GenerarComprobante.js
import React from 'react';

const GenerarComprobante = ({ data }) => {
  const handleGeneratePDF = async () => {
    const response = await fetch('/api/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'comprobante.pdf';
    a.click();
  };

  return (
    <div>
      <button onClick={handleGeneratePDF}>Generar comprobante</button>
    </div>
  );
};

export default GenerarComprobante;
