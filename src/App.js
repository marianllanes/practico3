// 

import React, { Component } from "react";
import Choices from "./componentes/Choices";
import Results from "./componentes/Results";
import styled from "styled-components";

// Estilos con Styled Components
const Container = styled.div`
  text-align: center;
  background-color: #e06c29;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const PlayerInfoContainer = styled.div`
  margin-bottom: 10px;
`;

const PlayerNameLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const PlayerNameInput = styled.input`
  padding: 5px;
  border: none;
  border-radius: 5px;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",   // Nombre del jugador
      playerScore: 0,   // Puntuación del jugador
      cpuScore: 0,      // Puntuación de la CPU
      roundsPlayed: 0,   // Rondas jugadas
      resultMessage: "",   // Mensaje del resultado
      attempts: 0,   // Contador de intentos
      gameOver: false,   // Estado del juego
    };
  }
// Maneja el cambio de nombre del jugador
  handleNameChange = (event) => {
    this.setState({ playerName: event.target.value });
  };

// Maneja el clic en una opción del juego
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

  // Maneja el clic en el botón de reinicio
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
      <Container>
        <Title>Juego de Piedra, Papel o Tijera</Title>
        <form>
        {/* Contenedor del nombre del jugador */}
          <PlayerInfoContainer>
            <PlayerNameLabel htmlFor="playerName">Ingrese su nombre:</PlayerNameLabel>
            <PlayerNameInput
              type="text"
              id="playerName"
              value={playerName}
              onChange={this.handleNameChange}
            />
          </PlayerInfoContainer>
        </form>
         {/* Componente de opciones de juego */}
        <Choices onChoiceClick={this.handleChoiceClick} />
         {/* Componente de resultados */}
        <Results
          playerScore={playerScore}
          cpuScore={cpuScore}
          roundsPlayed={roundsPlayed}
          resultMessage={resultMessage}
          onResetClick={this.handleResetClick}
        />
         {/* Mostrar mensaje de juego terminado si gameOver es verdadero */}
        {gameOver && (
          <div className="game-over">
            <h2>{resultMessage}</h2>
          </div>
        )}
      </Container>
    );
  }
}

export default App;