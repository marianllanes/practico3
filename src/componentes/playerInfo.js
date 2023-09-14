import React from "react";

function PlayerInfo({ playerName, onPlayerNameChange }) {
  return (
    <div className="player-info">
      <label htmlFor="playerName">Ingrese su nombre: </label>
      <input
        type="text"
        id="playerName"
        value={playerName}
        onChange={(e) => onPlayerNameChange(e.target.value)}
      />
    </div>
  );
}

export default PlayerInfo;

