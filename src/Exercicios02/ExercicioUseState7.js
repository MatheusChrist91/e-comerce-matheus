import React, { useState } from "react";

const ExercicioUseState7 = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const checaVazio = (event) => {
    event.preventDefault();    

    

    if ((nameInput === "" || emailInput === "")) {
      alert("Por favor, preencha todos os campos");
    } else {
      alert(`${nameInput}, seu cadastro foi concluído, suas informações foram enfiadas para ${emailInput}`);
    }

    setNameInput("")
    setEmailInput("")
  };


  return (
    <div>
      <h1>ExercicioUseState7</h1>
      <li>Nome: {nameInput}</li>
      <li>E-mail: {emailInput}</li>

      <form onSubmit={checaVazio}>
        <label>
          Nome:
          <input
            name="Nome"
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Digite seu nome"
          />
        </label>
        <br />
        <label>
          E-mail:
          <input
            name="E-mail"
            type="text"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="Digite seu E-mail"
          />
        </label>

        <br />
        <button onClick={checaVazio}>Enviar</button>
      </form>
    </div>
  );
};

export default ExercicioUseState7;
