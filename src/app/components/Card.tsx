import React from "react";
import Image from "next/image";

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
        <Image className="front" src={card.src} alt="card front" />
        <Image
          className="back"
          src="../../public/images/shroom-1.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};
