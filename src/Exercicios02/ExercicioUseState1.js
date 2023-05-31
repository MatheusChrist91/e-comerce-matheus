import React, { useState } from 'react'

const ExercicioUseState1 = () => {

  const [listaNomes, setListaNomes] = useState(["Alice", "Bob", "Carol", "David", "Eve"])

  const filterTemA = listaNomes.filter((item) => item.toLowerCase().includes("a"))

  return (
    <div>
      <h1>ExercicioUseState1</h1>
      {filterTemA.map((item, index) => (
        <div key={index}>
          <li>Contém a letra "a" os nomes: {item}</li>
        </div>
      ))}
    </div>
  )
}

export default ExercicioUseState1



