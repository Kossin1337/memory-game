import React from "react";

import { ICard } from "../../types/types";

import "./Card.scss";

interface CardProps {
  card: ICard;
  handleChoice: any;
  flipped: boolean;
  disabled: boolean;
}

export const Card = ({ card, handleChoice, flipped, disabled }: CardProps) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="./public/assets/images/cover.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};
