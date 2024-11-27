import React from 'react';

const ResultadoIMC = ({ resultado }) => {
  if (!resultado) return null;

  return (
    <div className="alert alert-info mt-4 text-center">
      <h4>Seu IMC: {resultado.imc}</h4>
      <p>Classificação: {resultado.classificacao}</p>
    </div>
  );
};

export default ResultadoIMC;