import React from "react";
import Image from "next/image";

import { ICard } from "../../../../types/types";

import cover from "../../../../../public/images/cover.png";

import { motion } from "framer-motion";
import { cardVariant } from "../../../motion/motion";

import "./Card.scss";

interface CardProps {
  card: ICard;
  delay: number;
  handleChoice: (card: ICard) => void;
  flipped: boolean;
  disabled: boolean;
}

const Card = ({ card, delay, handleChoice, flipped, disabled }: CardProps) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  /* add handleFrontClick */

  return (
    <motion.div
      className={`card ${card.matched ? "matched" : "nomatch"}`}
      variants={cardVariant(delay)}
      initial="hidden"
      whileInView="display"
      whileTap={!flipped ? "clicked" : ""}
    >
      <div className={flipped ? "flipped" : "no-flip"}>
        {card.src ? (
          <Image
            className="front"
            width={200}
            height={200}
            src={card.src}
            alt="card front"
            priority
          />
        ) : (
          <></>
        )}
        <Image
          className="back"
          width={200}
          height={200}
          src={cover}
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </motion.div>
  );
};

export default Card;
