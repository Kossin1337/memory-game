import React from "react";

import "./PlayAgainButton.scss";

interface IPlayAgainButton {
  shuffleCards: () => void;
}

const PlayAgainButton = ({ shuffleCards }: IPlayAgainButton) => {
  return (
    <button className="play-again-button" onClick={shuffleCards}>
      <span>NEW GAME</span>
    </button>
  );
};

export default PlayAgainButton;
