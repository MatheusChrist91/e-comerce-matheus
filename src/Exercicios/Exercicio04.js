import React from 'react'

const Exercicio04 = () => {

    const usuarios = [
        { id: 1, nome: 'Alice', idade: 25 },
        { id: 2, nome: 'Bob', idade: 17 },
        { id: 3, nome: 'Carol', idade: 20 },
        { id: 4, nome: 'David', idade: 16 }
        ];

    const filterIdade = usuarios.filter((item) => item.idade >= 20)
        /* console.log(filterIdade) */
  return (
    <div >
        <h1>Execicio 04</h1>
      {filterIdade.map((item) => (
        <div key={item.id}>
            <li>Tem idade maior ou igual a 20: {item.nome}</li>           
        </div>
      ))}
    </div>
  )
}

export default Exercicio04
        
