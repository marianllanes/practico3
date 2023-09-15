import React from "react";
import styled from "styled-components";

const ResultsWrapper = styled.div`
  text-align: center;
`;

const ResultMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const ScoreWrapper = styled.div`
  text-align: center;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #e1ec41;
`;

const ScoreText = styled.p`
  font-size: 16px;
`;

const PlayerScore = styled.p`
  font-weight: bold;
`;

const CpuScore = styled.p`
  font-weight: bold;
`;

const ResetButton = styled.button`
  padding: 10px 20px;
  background-color: #00b3a4;
  cursor: pointer;
`;

function Results({ playerScore, cpuScore, resultMessage, onResetClick }) {
  return (
    <ResultsWrapper>
      <ResultMessage>{resultMessage}</ResultMessage>
      <ScoreWrapper>
        <ScoreText>Score:</ScoreText>
        <PlayerScore>Jugador: {playerScore}</PlayerScore>
        <CpuScore>PC: {cpuScore}</CpuScore>
      </ScoreWrapper>
      <ResetButton onClick={onResetClick}>Reiniciar Juego</ResetButton>
    </ResultsWrapper>
  );
}

export default Results;

