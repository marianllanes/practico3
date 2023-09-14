// 

import React, { Component } from "react";
//import PlayerInfo from "./componentes/playerInfo";
import Choices from "./componentes/choices";
import Results from "./componentes/results";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      playerScore: 0,
      cpuScore: 0,
      roundsPlayed: 0,
      resultMessage: "",
      attempts: 0, // Contador de intentos
      gameOver: false, // Estado del juego
    };
  }

  handleNameChange = (event) => {
    this.setState({ playerName: event.target.value });
  };


  handleChoiceClick = (choice) => {
    const { 
      playerScore,
      cpuScore,
      roundsPlayed,
      attempts,
      gameOver,
    } = this.state;

    if (gameOver) {
      return;
    }

    const cpuChoice = Math.floor(Math.random() * 3);
    const cpuChoiceLabel = ["piedra", "papel", "tijera"][cpuChoice];

//Determinación del ganador 

    let resultMessage = "";
    if (choice === cpuChoiceLabel) {
      resultMessage = "Empate! Vuelve a intentarlo";
    } else if (
      (choice === "piedra" && cpuChoiceLabel === "tijera") ||
      (choice === "papel" && cpuChoiceLabel === "piedra") ||
      (choice === "tijera" && cpuChoiceLabel === "papel")
    ) {
      resultMessage = "Ganaste! Felicitaciones";
    } else {
      resultMessage = "Perdiste! Gana la Computadora";
    }

   // Actualización del marcador y rondas

    const newPlayerScore =
      resultMessage === "Ganaste! Felicitaciones" ? playerScore + 1 : playerScore;
    const newCpuScore =
      resultMessage === "Perdiste! Gana la Computadora" ? cpuScore + 1 : cpuScore;
    const newRoundsPlayed = roundsPlayed + 1;

    //Aumenta contador de intentos
    const newAttempts = attempts + 1;

    if (newAttempts >= 5) {
     let gameWinner = "";
      if (playerScore > cpuScore) {
      gameWinner = "¡Ganaste el juego! Felicitaciones";
       } else if (playerScore < cpuScore) {
      gameWinner = "¡Perdiste el juego humano, llego el tiempo de las maquinas!";
       } else {
      gameWinner = "¡Empate! El juego ha terminado en empate";
      }
      
      this.setState({
        gameOver: true,
        resultMessage: gameWinner,
      });
    } else {
  };

    this.setState({
      playerScore: newPlayerScore,
      cpuScore: newCpuScore,
      roundsPlayed: newRoundsPlayed,
      resultMessage: resultMessage,
      attempts: newAttempts,
    });
  };

  handleResetClick = () => {
    this.setState({
      playerName: "",
      playerScore: 0,
      cpuScore: 0,
      roundsPlayed: 0,
      resultMessage: "",
      attempts: 0, // Reiniciar el contador de intentos
      gameOver: false, // Reiniciar el estado del juego
    });
  };

  render() {
    const {
      playerName,
      playerScore,
      cpuScore,
      roundsPlayed,
      resultMessage,
      gameOver,
    } = this.state;

    return (
      <div className="container">
        <h1>Juego de Piedra, Papel o Tijera</h1>
        
        {/* Formulario para obtener el nombre del jugador */}
        <form>
          <div className="player-info">
            <label htmlFor="playerName">Ingrese su nombre: </label>
            <input
              type="text"
              id="playerName"
              value={playerName}
              onChange={this.handleNameChange} // Asigna el manejador de cambio
            />
          </div>
        </form>
        
        {/* Resto de los componentes */}
        <Choices onChoiceClick={this.handleChoiceClick} />
        <Results
          playerScore={playerScore}
          cpuScore={cpuScore}
          roundsPlayed={roundsPlayed}
          resultMessage={resultMessage}
          onResetClick={this.handleResetClick}
        />
          {/* Mensaje del ganador cuando el juego ha finalizado */}
          {gameOver && (
          <div className="game-over">
            <h2>{resultMessage}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default App;