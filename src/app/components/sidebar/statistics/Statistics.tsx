import React from "react";
import "./Statistics.scss";

export const Statistics = () => {
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
      <h3>Statistics</h3>
      <div className="stat-box">
        <h4>Total Games</h4>
        <span>137</span>
      </div>
      <div className="difficulties">
        <div className="difficulty">
          <span className="difficulty-title easy">EASY</span>
          <span className="difficulty-turns">3x4</span>
        </div>
        <div className="difficulty">
          <span className="difficulty-title medium">MEDIUM</span>
          <span className="difficulty-turns">4x5</span>
        </div>
        <div className="difficulty">
          <span className="difficulty-title hard">HARD</span>
          <span className="difficulty-turns">5x6</span>
        </div>
        <div className="difficulty">
          <span className="difficulty-title hard">ULTRA</span>
          <span className="difficulty-turns">6x7</span>
        </div>
      </div>
    </div>
  );
};
