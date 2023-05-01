import React from "react";
import ModalTemplate from "../../modal/ModalTemplate";

import "./GameFinished.scss";

interface IGameFinished {
  turns: number;
  isOpen: boolean;
  onClose: () => void;
}

const GameFinished = ({ turns, isOpen, onClose }: IGameFinished) => {
  return (
    <ModalTemplate key="game-finished-modal" isOpen={isOpen} onClose={onClose}>
      <div className="game-finished">
        <span>CONGRATULATIONS YOU WON</span>
        <span>Turns: {turns}</span>
      </div>
    </ModalTemplate>
  );
};

export default GameFinished;
