import React, { useState } from 'react'

const ExercicioUseState8 = () => {

    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultado, setResultado] = useState();

    const calcular = (e) => {
        e.preventDefault()

        const imc = peso / (altura * altura)

        const resultadoImc = imc.toFixed(2)
        
        setResultado(resultadoImc)
    }




  return (
    <div>
        <h1>ExercicioUseState8 (calculadora IMC)</h1>
      <label >Digite sua altura:
        <input 
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />
      </label>
      <br />
      <label >Digite seu peso:
        <input 
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calcular}>Calcular IMC</button>
      <h4>{resultado}</h4>
    </div>
  )
}

export default ExercicioUseState8
