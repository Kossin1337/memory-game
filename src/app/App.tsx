import React, { useState, useEffect } from "react";
import { Card } from "./components/Card";

import { ICard } from "../types/types";

import "./App.scss";

const cardImages = [
  { src: "/img/shroom-1.png", matched: false },
  { src: "/img/weed-1.png", matched: false },
  { src: "/img/ciggaretes-1.png", matched: false },
  { src: "/img/zippo-1.png", matched: false },
  { src: "/img/cygar-1.png", matched: false },
  { src: "/img/white-1.png", matched: false },
];

export const App = () => {
  const [cards, setCards] = useState<ICard[] | []>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<ICard | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<ICard | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  /* shuffle cards */
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  /* Handle a choice */
  const handleChoice = (card: ICard) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  /* useEffect for comparing two selected cards */
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      matchCards(choiceOne, choiceTwo);
    }
  }, [choiceOne, choiceTwo]);

  /* Match cards */
  const matchCards = (cardOne: ICard, cardTwo: ICard) => {
    if (cardOne.src === cardTwo.src) {
      setCards((prevCards: ICard[]) => {
        return prevCards.map((card) => {
          if (card.id === cardOne.id || card.id === cardTwo.id) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
      });
      resetTurn();
    } else {
      setTimeout(() => resetTurn(), 1000);
    }
  };

  /* Reset choices & increase turn */
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  /* start the game automatically */
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Match the cards</h1>
      <button onClick={shuffleCards}>New Game</button>
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
      <p>Number of turns: {turns}</p>
    </div>
  );
};
