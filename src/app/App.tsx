"use client";

import React, { useState, useEffect, createContext } from "react";
import { ICard } from "../types/types";

/* components */
import Sidebar from "./components/sidebar/Sidebar";
import Game from "./components/game/Game";
import Footer from "./components/footer/Footer";

import "./App.scss";

const cardImages = [
  { src: "/images/shroom-1.png", matched: false },
  { src: "/images/weed-1.png", matched: false },
  { src: "/images/ciggaretes-1.png", matched: false },
  { src: "/images/zippo-1.png", matched: false },
  { src: "/images/cygar-1.png", matched: false },
  { src: "/images/white-1.png", matched: false },
];

const ghostCardImages = [
  { src: "/ghosts/ghost1.png", matched: false },
  { src: "/ghosts/ghost2.png", matched: false },
  { src: "/ghosts/ghost3.png", matched: false },
  { src: "/ghosts/ghost4.png", matched: false },
  { src: "/ghosts/ghost5.png", matched: false },
  { src: "/ghosts/ghost6.png", matched: false },
  { src: "/ghosts/ghost7.png", matched: false },
  { src: "/ghosts/ghost8.png", matched: false },
  { src: "/ghosts/ghost9.png", matched: false },
  { src: "/ghosts/ghost10.png", matched: false },
  { src: "/ghosts/ghost11.png", matched: false },
  { src: "/ghosts/ghost12.png", matched: false },
  { src: "/ghosts/ghost13.png", matched: false },
  { src: "/ghosts/ghost14.png", matched: false },
  { src: "/ghosts/ghost15.png", matched: false },
  { src: "/ghosts/ghost16.png", matched: false },
  { src: "/ghosts/ghost17.png", matched: false },
  { src: "/ghosts/ghost18.png", matched: false },
  { src: "/ghosts/ghost19.png", matched: false },
  { src: "/ghosts/ghost20.png", matched: false },
  { src: "/ghosts/ghost21.png", matched: false },
];

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

interface ICardTemplate {
  src: string;
  matched: boolean;
}

export const App = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);
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

  const getDifficulty = (grid: string) => {
    const numbers = grid.split("x").map((num) => parseInt(num)); // split the string and convert each number to an integer
    const gridSize = numbers.reduce((total, num) => total * num); // calculate the product of the two numbers
    return gridSize;
  };

  const changeGrid = (grid: string) => {
    setGrid(grid);
    setLoaded(false);
  };

  /* shuffle cards */
  const shuffleCards = () => {
    setLoaded(false);
    setCards([]);
    const gridSize = getDifficulty(grid);
    const images = new Set<ICardTemplate>(ghostCardImages);
    console.log("Grid Size: ", gridSize);

    function getRandomSet(originalSet: Set<ICardTemplate>, n: number) {
      const randomSet = new Set();
      while (randomSet.size < n) {
        const randomIndex = Math.floor(Math.random() * originalSet.size);
        const randomItem = Array.from(originalSet)[randomIndex];
        randomSet.add(randomItem);
      }
      return randomSet;
    }

    const selected = getRandomSet(images, gridSize / 2);

    let shuffledCards = [...Array.from(selected), ...Array.from(selected)]
      .sort(() => Math.random() - 0.5)
      .map((card: any, index) => ({
        ...card,
        id: `${index}-${Math.random()}`,
      }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setLoaded(true);
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
        <Sidebar grid={grid} setGrid={changeGrid} />
        <Game
          loaded={loaded}
          grid={grid}
          turns={turns}
          cards={cards}
          handleChoice={handleChoice}
          choiceOne={choiceOne}
          choiceTwo={choiceTwo}
          disabled={disabled}
          shuffleCards={shuffleCards}
        />
        {/* <Footer /> */}
      </div>
    </GameContext.Provider>
  );
};
