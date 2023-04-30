import React from "react";

import { ICard } from "@/types/types";

import GameNavigation from "./GameNavigation";
import Grid from "./grid/Grid";
import PlayAgainButton from "./PlayAgainButton";

import "./Game.scss";

interface IGame {
  loaded: boolean;
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
  grid,
  turns,
  cards,
  handleChoice,
  choiceOne,
  choiceTwo,
  disabled,
  shuffleCards,
}: IGame) => {
  return (
    <div className="app-content">
      <GameNavigation />
      {loaded && (
        <Grid
          loaded={loaded}
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
