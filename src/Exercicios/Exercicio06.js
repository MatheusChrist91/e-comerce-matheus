import React from 'react'

const Exercicio06 = () => {

    const cores = ['vermelho', 'azul', 'amarelo', 'verde', 'roxo'];

      const coresPrimarias = cores.filter((item) => item === 'vermelho' || item === 'azul' || item === 'amarelo')
      console.log(coresPrimarias)

      if (cores.includes('vermelho') && cores.includes('amarelo') && cores.includes('azul')){
        console.log('Existe cores primárias')
      } else {
        console.log('Não existem cores primárias')
      }


    
    



  return (
    <div>
      <h1>Exercicio 06</h1>
        {coresPrimarias.map((item) => (
          <div>
            <li>as cores primárias são {coresPrimarias}</li>
          </div>
        ))}
    </div>
  )
}

export default Exercicio06