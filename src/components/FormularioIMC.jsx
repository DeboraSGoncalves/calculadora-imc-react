import React, {useState} from 'react';

const FormularioIMC = ({onCalcular}) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState ('');

    const handleCalcular = () => {
        if (altura && peso){
            onCalcular(parseFloat(altura),parseFloat(peso));

        } else {
            alert ('Por favor, preencha todos os campos.')
        }
    };

    return(
        <div className='card p-4 mt-3'>
            <div className='mb-3'>
                <label htmlFor="altura" className='form-label'>Altura (cm):</label>
                <input type="number" 
                id='altura' 
                className='form-control'
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder='Informe sua Altura (em centímetros)'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="peso" className='form-label'>Peso(kg):</label>
                <input type="number" 
                id='peso' 
                className='form-control'
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder='Informe seu peso (em quilogramas)'
                />
            </div>
            <button className='btn btn-primary w-100' onClick={handleCalcular}>Calcular IMC</button>
        </div>
    );
};

export default FormularioIMC;