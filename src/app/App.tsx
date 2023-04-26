"use client";

import React, { useState, useEffect, createContext } from "react";
import { ICard } from "../types/types";

/* components */
import Sidebar from "./components/sidebar/Sidebar";
import Grid from "./components/card-grid/Grid";
import Footer from "./components/Footer";

import "./App.scss";
import { PlayAgainButton } from "./components/PlayAgainButton";

const cardImages = [
  { src: "/images/shroom-1.png", matched: false },
  { src: "/images/weed-1.png", matched: false },
  { src: "/images/ciggaretes-1.png", matched: false },
  { src: "/images/zippo-1.png", matched: false },
  { src: "/images/cygar-1.png", matched: false },
  { src: "/images/white-1.png", matched: false },
];

const ghostCardImages = [{ src: "/images/shroom-1.png", matched: false }];

/* IMAGE LOADING FOR THE FUTURE */

/* APPLICATION WILL BE CALLED 'MEMORIES' OR STH LIKE THIS */
/* 5 DIFFERENT MODES AND BACKGROUND CHANGES DEPENDING ON THE DECK */
/* DEFAULT 2 SWITCHABLE WEBSITE MODES (DARK/XXX) */

/* ADD CONTEXT FOR THIS SHIT */
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

  /* 3x4 = 12, 4x5 = 20, 5x6 = 30 & 6x7 = 42 */
  const [grid, setGrid] = useState<string>("3x4");
  // first 2 are free (user has 10 cards everytime he unlocks a new deck)
  // 5 are for quests
  // 6 are for ADS

  const setDifficulty = (gridSize: string) => {
    const numbers = gridSize.split("x").map((num) => parseInt(num)); // split the string and convert each number to an integer
    const product = numbers.reduce((total, num) => total * num); // calculate the product of the two numbers
    return product;
  };

  /* shuffle cards */
  const shuffleCards = () => {
    /* Shuffle cards to the deck */
    const gridSize = setDifficulty(grid);
    const cards = new Set();
    const images = cardImages;
    for (let i = 0; i < gridSize / 2; i++) {
      console.log(i);
      if (!cards.has(images[i])) {
        cards.add(images[i]);
        // Do something with the item at the current position
        console.log(images[i]);
      }
    }

    console.log(cards);

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
      setTimeout(() => resetTurn(), 500);
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

  /* useEffect for changing gridSize */
  useEffect(() => {
    shuffleCards();
  }, [grid]);

  return (
    <GameContext.Provider value={defaultGameContext}>
      <div className="application-wrapper">
        <Sidebar setGrid={setGrid} />
        <div className="app-content">
          <h1 className="application-header">Match the cards</h1>
          <Grid
            cards={cards}
            handleChoice={handleChoice}
            choiceOne={choiceOne}
            choiceTwo={choiceTwo}
            disabled={disabled}
          />
          <PlayAgainButton shuffleCards={shuffleCards} />
          <div className="turns-counter">
            <span className="turn-text">Turns</span>
            <span className="turn-number">{turns}</span>
          </div>
        </div>
        <Footer />
      </div>
    </GameContext.Provider>
  );
};
