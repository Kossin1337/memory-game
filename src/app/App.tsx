"use client";

import React, { useState, useEffect, createContext } from "react";
import { Card } from "./components/Card";

import { ICard } from "../types/types";

import "./App.scss";
import { PlayAgainButton } from "./components/PlayAgainButton";

const cardImages = [
  { src: "../../public/images/shroom-1.png", matched: false },
  { src: "../../public/images/weed-1.png", matched: false },
  { src: "../../public/images/ciggaretes-1.png", matched: false },
  { src: "../../public/images/zippo-1.png", matched: false },
  { src: "../../public/images/cygar-1.png", matched: false },
  { src: "../../public/images/white-1.png", matched: false },
];

/* ADD CONTEXT FOR THIS SHIT */

/* IMAGE LOADING FOR THE FUTURE */

/* APPLICATION WILL BE CALLED 'MEMORIES' OR STH LIKE THIS */
/* 5 DIFFERENT MODES AND BACKGROUND CHANGES DEPENDING ON THE DECK */
/* DEFAULT 2 SWITCHABLE WEBSITE MODES (DARK/XXX) */

const defaultGameContext = {
  totalGames: 0,
  statistics: {
    easy: {
      unlockedCards: 10,
      games: 0,
      won: 0,
      avgTurns: 5,
    },
    medium: {
      unlockedCards: 10,
      games: 0,
      won: 0,
      avgTurns: 5,
    },
    hard: {
      unlocked: false,
      unlockedCards: 0, // changes to 10
      games: 0,
      won: 0,
      avgTurns: 5,
    },
    god: {},
  },
};

const GameContext = createContext(defaultGameContext);

export const App = () => {
  const [cards, setCards] = useState<ICard[] | []>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<ICard | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<ICard | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const [gridSize, setGridSize] = useState<string>("3x4");
  /* DIFFERENT GRID SIZES */
  /* 3x4 = 12, 4x5 = 20, 5x6 = 30 & 6x7 = 42 */
  // first 2 are free (user has 10 cards everytime he unlocks a new deck)
  // 5 are for quests
  // 6 are for ADS

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

  /* useEffect for changing gridSize */
  useEffect(() => {}, [gridSize]);

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
    <GameContext.Provider value={defaultGameContext}>
      <div className="App">
        <h1 className="application-header">Match the cards</h1>
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
        <PlayAgainButton shuffleCards={shuffleCards} />
        <p>Number of turns: {turns}</p>
      </div>
    </GameContext.Provider>
  );
};
