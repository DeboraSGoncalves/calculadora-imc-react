import React, { useState } from 'react';
import FormularioIMC from './components/FormularioIMC';
import ResultadoIMC from './components/ResultadoIMC';

const App = ()=>{
  const [resultado, setResultado]= useState (null);

  const calcularIMC = (altura, peso)=> {
    const alturaEmMetros = altura / 100;
    const imc = (peso / (alturaEmMetros ** 2)).toFixed(2);


    let classificacao = '';
    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'sobrepeso';
    else if (imc < 34.9) classificacao = 'obesidade grau I';
    else if (imc < 39.9) classificacao = 'obesidade grau II';
    else classificacao = 'obesidade grau III';

    setResultado({imc, classificacao});
    

  };

  return(
    <div className='container mt-5'>
      <h1 className='text-center'>Calculadora de IMC</h1>
      <FormularioIMC onCalcular={calcularIMC}/>
      <ResultadoIMC resultado={resultado}/>
    </div>
  );
};

export default App
