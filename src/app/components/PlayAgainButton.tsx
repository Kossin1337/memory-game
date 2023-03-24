import React from "react";

import "./PlayAgainButton.scss";

interface IPlayAgainButton {
  shuffleCards: () => void;
}

export const PlayAgainButton = ({ shuffleCards }: IPlayAgainButton) => {
  return <button onClick={shuffleCards}>New Game</button>;
};
