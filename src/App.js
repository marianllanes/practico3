// 

import React, { Component } from "react";
import PlayerInfo from "./componentes/playerInfo";
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
    };
  }

  handlePlayerNameChange = (name) => {
    this.setState({ playerName: name });
  };

  handleChoiceClick = (choice) => {
    const { playerScore, cpuScore, roundsPlayed } = this.state;

    const cpuChoice = Math.floor(Math.random() * 3);
    const cpuChoiceLabel = ["piedra", "papel", "tijera"][cpuChoice];

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

    const newPlayerScore =
      resultMessage === "Ganaste! Felicitaciones" ? playerScore + 1 : playerScore;
    const newCpuScore =
      resultMessage === "Perdiste! Gana la Computadora" ? cpuScore + 1 : cpuScore;
    const newRoundsPlayed = roundsPlayed + 1;

    this.setState({
      playerScore: newPlayerScore,
      cpuScore: newCpuScore,
      roundsPlayed: newRoundsPlayed,
      resultMessage: resultMessage,
    });
  };

  handleResetClick = () => {
    this.setState({
      playerName: "",
      playerScore: 0,
      cpuScore: 0,
      roundsPlayed: 0,
      resultMessage: "",
    });
  };

  render() {
    const {
      playerName,
      playerScore,
      cpuScore,
      roundsPlayed,
      resultMessage,
    } = this.state;

    return (
      <div className="container">
        <h1>Juego de Piedra, Papel o Tijera</h1>
        <PlayerInfo
          playerName={playerName}
          onPlayerNameChange={this.handlePlayerNameChange}
        />
        <Choices onChoiceClick={this.handleChoiceClick} />
        <Results
          playerScore={playerScore}
          cpuScore={cpuScore}
          roundsPlayed={roundsPlayed}
          resultMessage={resultMessage}
          onResetClick={this.handleResetClick}
        />
      </div>
    );
  }
}

export default App;
