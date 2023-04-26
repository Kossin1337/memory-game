import React from "react";
import { ICard } from "@/types/types";

import Card from "./Card";

interface IGrid {
  cards: ICard[] | [];
  handleChoice: (card: ICard) => void;
  choiceOne: ICard | null;
  choiceTwo: ICard | null;
  disabled: boolean;
}

const Grid = ({
  cards,
  handleChoice,
  choiceOne,
  choiceTwo,
  disabled,
}: IGrid) => {
  return (
    <div className="card-grid">
      {cards.map((card: ICard) => (
        <Card
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default Grid;
