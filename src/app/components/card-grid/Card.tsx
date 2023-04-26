import React from "react";
import Image from "next/image";

import { ICard } from "../../../types/types";

import cover from "../../../../public/images/cover.png";

import "./Card.scss";

interface CardProps {
  card: ICard;
  handleChoice: any;
  flipped: boolean;
  disabled: boolean;
}

const Card = ({ card, handleChoice, flipped, disabled }: CardProps) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  /* add handleFrontClick */

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <Image
          className="front"
          width={200}
          height={200}
          src={card.src}
          alt="card front"
        />
        <Image
          className="back"
          width={200}
          height={200}
          src={cover}
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default Card;
