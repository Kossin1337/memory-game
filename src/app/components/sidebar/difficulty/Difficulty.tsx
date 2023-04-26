import React, { useState } from "react";
import "./Difficulty.scss";

interface IDifficulty {
  setGrid: (grid: string) => void;
}

const Difficulty = ({ setGrid }: IDifficulty) => {
  return (
    <div className="dif-levels">
      <div className="dif-box easy" onClick={() => setGrid("3x4")}>
        <span className="type">EASY</span>
        <span className="value">3x4</span>
      </div>
      <div className="dif-box casual" onClick={() => setGrid("4x5")}>
        <span className="type">CASUAL</span>
        <span className="value">4x5</span>
      </div>
      <div className="dif-box hard" onClick={() => setGrid("5x6")}>
        <span className="type">HARD</span>
        <span className="value">5x6</span>
      </div>
      <div className="dif-box ultra" onClick={() => setGrid("6x7")}>
        <span className="type">ULTRA</span>
        <span className="value">6x7</span>
      </div>
    </div>
  );
};

export default Difficulty;
