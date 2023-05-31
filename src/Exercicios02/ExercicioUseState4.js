import React, { useState } from 'react'

const ExercicioUseState4 = () => {

    const [nomesMaiorIdade, setNomesMaioriade] = useState([{ nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 17 },
    { nome: "Carol", idade: 32 },
    { nome: "David", idade: 14 },
     { nome: "Eve", idade: 19 }])

     const maiorIdade = nomesMaiorIdade.filter((item) => item.idade > 18)

  return (
    <div>
      <h1>ExercicioUseState4</h1>
      {maiorIdade.map((item, index) => (
        <div key={index}>
          <li>Maiores de 18: {item.nome}</li>
        </div>
      ))}
    </div>
  )
}

export default ExercicioUseState4