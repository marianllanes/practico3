import React from "react";
import styled from "styled-components";

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const ChoiceButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #d0ff00;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Choices({ onChoiceClick }) {
  return (
    <OptionsWrapper>
    <ChoiceButton onClick={() => onChoiceClick("piedra")}>
      <img src="/piedra.jpg" alt="Piedra" width="100" height="100" />
    </ChoiceButton>
    <ChoiceButton onClick={() => onChoiceClick("papel")}>
      <img src="/papel.jpg" alt="Papel" width="100" height="100" />
    </ChoiceButton>
    <ChoiceButton onClick={() => onChoiceClick("tijera")}>
      <img src="/tijera.jpg" alt="Tijera" width="100" height="100" />
    </ChoiceButton>
  </OptionsWrapper>
);
}

export default Choices;