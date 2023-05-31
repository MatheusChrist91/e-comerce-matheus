import React, { useState } from 'react'

const ExercicioUseState6 = () => {

    const [numerosPares, setNumerosPares] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const filterPar = numerosPares.filter((item) => item % 2 === 0)


  return (
    <div>
      <h1>ExercicioUseState6</h1>
      {filterPar.map((item, index) => (
        <div key={index}>
            <li>Os números pares são: {item}</li>
        </div>
      ))}
    </div>
  )
}

export default ExercicioUseState6
