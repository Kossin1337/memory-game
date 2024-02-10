import React, { useState } from "react";

import SidebarNavigation from "./sidebar-navigation/SidebarNavigation";
import Difficulty from "./difficulty/Difficulty";
import CardDecks from "./decks/CardDecks";
import Statistics from "./statistics/Statistics";

import BottomMenu from "./bottom-menu/ProfileMenu";

import { UpArrow } from "./icons/UpArrow";
import { DownArrow } from "./icons/DownArrow";

import { motion } from "framer-motion";
import { sidebarVariant } from "../../motion/motion";

import "./Sidebar.scss";

interface ISidebar {
  grid: string;
  setGrid: (grid: string) => void;
}

/* Here the user can change their cards */
/* If user is not logged in, only display two sets of cards */
/* Allow the user to get new set of cards, by watching a short video */
/* AddBlock and UBlock proof of this shit is necessary XD */
/* Implement nextAuth check into this page */
/* Allow the option to add more cool cards by watching a video */

const Sidebar = ({ grid, setGrid }: ISidebar) => {
  const [openDifficulty, setOpenDifficulty] = useState<boolean>(true);
  const [openDecks, setOpenDecks] = useState<boolean>(false);
  const [openStats, setOpenStats] = useState<boolean>(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={sidebarVariant}
      className="sidebar"
    >
      {/* <h2 className="sidebar-title">Welcome G!</h2> */}
      <SidebarNavigation />
      <div className="content">
        <div className="toggle-options">
          <div
            className={`diffuculty-box option ${
              openDifficulty ? "open" : "closed"
            }`}
          >
            <div
              className="nav-header"
              onClick={(e) => {
                e.stopPropagation();
                setOpenDifficulty((dif) => !dif);
              }}
            >
              {openDifficulty ? <UpArrow /> : <DownArrow />}
              <span className="option-text">DIFFICULTY</span>
              {openDifficulty ? <UpArrow /> : <DownArrow />}
            </div>
            {openDifficulty && <Difficulty setGrid={setGrid} />}
          </div>
          <div className={`option ${openDecks ? "open" : "closed"}`}>
            <div
              className="nav-header"
              onClick={() => setOpenDecks((decks) => !decks)}
            >
              {openDecks ? <UpArrow /> : <DownArrow />}
              <span className="option-text">DECKS</span>
              {openDecks ? <UpArrow /> : <DownArrow />}
            </div>
            {openDecks && <CardDecks />}
          </div>
          <div className={`option ${openStats ? "open" : "closed"}`}>
            <div
              className="nav-header"
              onClick={() => setOpenStats((stats) => !stats)}
            >
              {openStats ? <UpArrow /> : <DownArrow />}
              <span className="option-text">STATISTICS</span>
              {openStats ? <UpArrow /> : <DownArrow />}
            </div>
            {openStats && <Statistics grid={grid} />}
          </div>
        </div>
      </div>

      <BottomMenu />
    </motion.div>
  );
};

export default Sidebar;
