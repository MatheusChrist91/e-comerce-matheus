import React from 'react'

const Exercicio05 = () => {

    const produtos = [
        { id: 1, nome: 'Camiseta', preco: 30 },
        { id: 2, nome: 'Calça', preco: 70 },
        { id: 3, nome: 'Tênis', preco: 100 },
        { id: 4, nome: 'Boné', preco: 20 }
        ];

        const filterPreco = produtos.filter((item) => item.preco > 30)

  return (
    <div >
        <h1>Exercicio 05</h1>
        {filterPreco.map((item) => (
            <div>
                <li>Os produtos com o precço acima de 30 são: {item.nome}</li>
            </div>
        ))}
        
    </div>
  )
}

export default Exercicio05
