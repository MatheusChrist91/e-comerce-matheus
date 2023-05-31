import React, { useState } from 'react'

const ExercicioUseState5 = () => {

    const [idadeCidade, setIdadeCidade] = useState([{ nome: "Alice", idade: 25, cidade: "São Paulo" },
    { nome: "Bob", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Carol", idade: 40, cidade: "São Paulo" },
    { nome: "David", idade: 28, cidade: "São Paulo" },
    { nome: "Eve", idade: 32, cidade: "São Paulo" }])

    const filterExc5 = idadeCidade.filter((item) => item.cidade === "São Paulo" && item.idade > 30)

  return (
    <div>
        <h1>ExercicioUseState5</h1>
      {filterExc5.map((item, index) => (
        <div key={index}>
            <li>idade maior que 30 e cidade São Paulo: {item.nome}</li>
        </div>
      ))}
    </div>
  )
}

export default ExercicioUseState5
