import React from 'react'

const Exercicio06 = () => {

    const cores = ['vermelho', 'azul', 'amarelo', 'verde', 'roxo'];

    /* const corPrima = "vermelho";

  const coresSearch = [];

  cores.forEach((cor) => {
    if (["vermelho", "azul", "amarelo"].includes(cor)) {
      coresSearch.push(cor);
    }
  });

  return (
    <div>
      <h1>Exercio 06</h1>
      {coresSearch.map((cor, index) => (
        <div key={index}>
          <ul>
            <li>{cor}</li>
          </ul>
        </div>
      )) */

      

  const coresPrimarias = cores.filter((item) =>
    ["vermelho", "azul", "amarelo"].includes(item)
  );



    
    



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