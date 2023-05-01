import React from "react";
import { ICard } from "@/types/types";

import Card from "./Card";

interface IGrid {
  grid: string;
  cards: ICard[] | [];
  handleChoice: (card: ICard) => void;
  choiceOne: ICard | null;
  choiceTwo: ICard | null;
  disabled: boolean;
}

const Grid = ({
  grid,
  cards,
  handleChoice,
  choiceOne,
  choiceTwo,
  disabled,
}: IGrid) => {
  return (
    <div className={`card-grid grid-${grid.slice(-1)}`}>
      {cards.map((card: ICard, index) => {
        const column: number = (index % parseInt(grid[2])) + 1;
        const row: number = Math.floor(index / parseInt(grid[2])) + 1;

        const delay = row * 0.15 + column * 0.1;

        console.log("Row: ", row, " Column: ", column, " Delay: ", delay);

        return (
          <Card
            key={`${index}-${card.id}`}
            delay={delay}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
};

export default Grid;
