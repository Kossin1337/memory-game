import React, { useState } from "react";

import { ICard } from "@/types/types";

import GameNavigation from "./GameNavigation";
import Grid from "./grid/Grid";
import PlayAgainButton from "./PlayAgainButton";
import GameFinished from "./game-win-modal/GameFinished";

import "./Game.scss";

interface IGame {
  loaded: boolean;
  finished: boolean;
  grid: string;
  turns: number;
  cards: ICard[] | [];
  handleChoice: (card: ICard) => void;
  choiceOne: ICard | null;
  choiceTwo: ICard | null;
  disabled: boolean;
  shuffleCards: () => void;
}

const Game = ({
  loaded,
  finished,
  grid,
  turns,
  cards,
  handleChoice,
  choiceOne,
  choiceTwo,
  disabled,
  shuffleCards,
}: IGame) => {
  const [openSummmary, setOpenSummary] = useState<boolean>(!finished);

  return (
    <div className="app-content">
      {finished && (
        <GameFinished
          turns={turns}
          isOpen={openSummmary}
          onClose={() => setOpenSummary(false)}
        />
      )}
      <GameNavigation />
      {loaded && (
        <Grid
          grid={grid}
          cards={cards}
          handleChoice={handleChoice}
          choiceOne={choiceOne}
          choiceTwo={choiceTwo}
          disabled={disabled}
        />
      )}
      <div className="game-information">
        <div className="turns-counter">
          <span className="turn-text">Turns</span>
          <span className="turn-number">{turns}</span>
        </div>
        <PlayAgainButton shuffleCards={shuffleCards} />
      </div>
    </div>
  );
};

export default Game;
