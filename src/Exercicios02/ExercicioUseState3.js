import React, { useState } from 'react'

const ExercicioUseState3 = () => {

    const [bichos, setBichos] = useState (["Dragão", "Cachorro", "Fada", "Panda"])

    const filterPanda = bichos.filter((item) => item.includes("Panda"))

  return (
    <div>
      <h1>ExercicioUseState3</h1>      
        {filterPanda.map((item, index) => (
          <div key={index}>
            <li>imprima bicho:{item}</li>
          </div>
        ))}      
    </div>
  )
}

export default ExercicioUseState3
