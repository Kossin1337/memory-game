import React from "react";
import ModalTemplate from "../../modal/ModalTemplate";

import "./GameFinished.scss";

interface IGameFinished {
  turns: number;
}

const GameFinished = ({ turns }: IGameFinished) => {
  return (
    <div className="game-finished">
      <span>CONGRATULATIONS YOU WON</span>
      <span>Turns: {turns}</span>
    </div>
  );
};

export default GameFinished;
