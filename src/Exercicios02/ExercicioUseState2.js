import React, { useState } from 'react'

const ExercicioUseState2 = () => {

  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const filterMaiorCinco = numeros.filter((item) => item > 5)    

  return (
    <div>
      <h1>ExercicioUseState2</h1>
      {filterMaiorCinco.map((item, index) => (
        <div key={index}>
          <li>Os números maiores que 5 são:{item}</li>
        </div>
      ))}
    </div>
  )
}

export default ExercicioUseState2
