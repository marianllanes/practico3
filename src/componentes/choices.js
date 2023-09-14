import React from "react";


function Choices({ onChoiceClick }) {
  return (
    <div className="options">
      <button className="choice" onClick={() => onChoiceClick("piedra")}>
        Piedra
      </button>
      <button className="choice" onClick={() => onChoiceClick("papel")}>
        Papel
      </button>
      <button className="choice" onClick={() => onChoiceClick("tijera")}>
        Tijera
      </button>
    </div>
  );
}

export default Choices;
