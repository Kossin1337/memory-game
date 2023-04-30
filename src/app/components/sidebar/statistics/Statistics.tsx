import React from "react";
import "./Statistics.scss";

interface IStatistics {
  grid: string;
}

const Statistics = ({ grid }: IStatistics) => {
  /* Statistics like: total games */
  /* AVG turn on every difficulty level */
  /* different card decks collected */
  /* some of the decks can only be collected by completing the game on higher difficulties */

  /* so we need 30 cards maximum */
  /* the levels are 3x4 = 12, 4x5 = 20, 5x6 = 30 & final 6x7 = 42 */
  /* All aligned horizontaly, summing up to 21 */
  /* 15 of them can be achieved by watching add */
  /* 6 of them are achieved by playing on difficulty levels */

  /* some of the quests include */
  // winning 5 games in a row on difficulty easy (3x4) with less than 10 turns
  // winning 4 games in a row on difficulty medium (4x5) with less than xx turns
  // winning 3 games in a row on difficulty hard (5x6) with less than xx turns
  // winning 2 games in a row on difficulty ultra (6x7) with less than xx turns

  return (
    <div className="statistics-container">
      <div className="stat-box">
        <span className="total-games-text">Total Games</span>
        <span className="total-games-value">137</span>
      </div>
      <div className="difficulties">
        <div className="difficulty easy">
          <div className="difficulty-header">
            <span className="difficulty-title">EASY</span>
            <span className="difficulty-turns">3x4</span>
          </div>
          <div className="info">
            <div className="info-box games">
              <span className="name">Games</span>
              <span className="value">XXX</span>
            </div>
            <div className="info-box turns">
              <span className="name">Turns</span>
              <span className="value">XXX</span>
            </div>
            <div className="info-box time">
              <span className="name">Time</span>
              <span className="value">XXX</span>
            </div>
          </div>
        </div>
        <div className="difficulty casual">
          <div className="difficulty-header">
            <span className="difficulty-title">CASUAL</span>
            <span className="difficulty-turns">4x5</span>
          </div>
          <div className="info">
            <div className="info-box games">
              <span className="name">Games</span>
              <span className="value">XXX</span>
            </div>
            <div className="info-box turns">
              <span className="name">Turns</span>
              <span className="value">XXX</span>
            </div>
            <div className="info-box time">
              <span className="name">Time</span>
              <span className="value">XXX</span>
            </div>
          </div>
        </div>
        <div className="difficulty hard">
          <div className="difficulty-header">
            <span className="difficulty-title">HARD</span>
            <span className="difficulty-turns">5x6</span>
          </div>
          <div className="info">
            <div className="info-box games">
              <span className="name">Games</span>
              <span className="value">XXX</span>
            </div>
            <div className="info-box turns">
              <span className="name">Turns</span>
              <span className="value">XXX</span>
            </div>
            <div className="info-box time">
              <span className="name">Time</span>
              <span className="value">XXX</span>
            </div>
          </div>
        </div>
        <div className="difficulty ultra">
          <div className="difficulty-header">
            <span className="difficulty-title">ULTRA</span>
            <span className="difficulty-turns">6x7</span>
          </div>
          <div className="info">
            <div className="info-box games">
              <span className="name">Games</span>
              <span className="value">XXX</span>
            </div>
            <div className="info-box turns">
              <span className="name">Turns</span>
              <span className="value">XXX</span>
            </div>
            <div className="info-box time">
              <span className="name">Time</span>
              <span className="value">XXX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
