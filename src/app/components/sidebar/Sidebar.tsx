import React, { useState } from "react";

import Difficulty from "./difficulty/Difficulty";
import CardDecks from "./decks/CardDecks";
import Statistics from "./statistics/Statistics";

import "./Sidebar.scss";

interface ISidebar {
  setGrid: (grid: string) => void;
}

/* Here the user can change their cards */
/* If user is not logged in, only display two sets of cards */
/* Allow the user to get new set of cards, by watching a short video */
/* AddBlock and UBlock proof of this shit is necessary XD */
/* Implement nextAuth check into this page */
/* Allow the option to add more cool cards by watching a video */

const Sidebar = ({ setGrid }: ISidebar) => {
  const [openDifficulty, setOpenDifficulty] = useState<boolean>(true);
  const [openDecks, setOpenDecks] = useState<boolean>(false);
  const [openStats, setOpenStats] = useState<boolean>(false);
  /* the levels are 3x4 = 12, 4x5 = 20, 5x6 = 30 & final 6x7 = 42 */

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Welcome G!</h2>
      <div className="content">
        <div className="toggle-options">
          <div
            className={`diffuculty-box option ${
              openDifficulty ? "open" : "closed"
            }`}
            // onClick={(e) => {
            //   e.stopPropagation();
            //   setOpenDifficulty((dif) => !dif);
            // }}
          >
            <span className="option-text">DIFFICULTY</span>
            {openDifficulty && <Difficulty setGrid={setGrid} />}
          </div>
          <div
            className={`option ${openDecks ? "open" : "closed"}`}
            onClick={() => setOpenDecks((decks) => !decks)}
          >
            <span className="option-text">DECKS</span>
            {openDecks && <CardDecks />}
          </div>
          <div
            className={`option ${openStats ? "open" : "closed"}`}
            onClick={() => setOpenStats((stats) => !stats)}
          >
            <span className="option-text">STATISTICS</span>
            {openStats && <Statistics />}
          </div>
        </div>
      </div>

      <div className="bottom-menu">
        <div className="setting"></div>
      </div>
    </div>
  );
};

export default Sidebar;
