import React from "react";

const ExemploMap = () => {
  const usuario = [
    { id: 1, name: "Felipe", banda: "Link Park", talento: "Auto didata" },
    { id: 2, name: "Renata", banda: "Nelson Gonçalves", talento: "Adaptação" },
    { id: 3, name: "Edgar", banda: "John Cash ", talento: "Criatividade" },
  ];

  return (
    <div>
      {usuario.map((item) => (
        <div key={item.id}>
          <li>{item.name}</li>
          <li>{item.banda}</li>
          <li>{item.talento}</li>
        </div>
      ))}
    </div>
  );
};

export default ExemploMap;