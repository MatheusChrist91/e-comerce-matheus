import React from 'react'

const Exercicio03 = () => {

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const filterPares = numeros.filter((item) => item % 2 === 0)

  return (
    
    <div>
        <h1>Exercicio 03</h1>
        {filterPares.map((item, index) => (
            <div key={index}>
                <li>São pares os numeros {item}</li>
            </div>
        ))}
    </div>
  )
}

export default Exercicio03
