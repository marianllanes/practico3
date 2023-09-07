import React from "react";

function Results({ playerScore, cpuScore, roundsPlayed, resultMessage, onResetClick }) {
  return (
    <div>
      <div className="result">
        {resultMessage}
      </div>
      <div className="score">
        <p>Score:</p>
        <p id="playerScore">Jugador: {playerScore}</p>
        <p id="cpuScore">PC: {cpuScore}</p>
      </div>
      <button id="resetButton" onClick={onResetClick}>
        Reiniciar Juego
      </button>
    </div>
  );
}

export default Results;
