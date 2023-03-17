import React, { useState } from "react";

import "./Sidebar.scss";

const Sidebar = () => {
  /* Here the user can change their cards */
  /* If user is not logged in, only display two sets of cards */
  /* Allow the user to get new set of cards, by watching a short video */
  /* AddBlock and UBlock proof of this shit is necessary XD */
  /* Implement nextAuth check into this page */
  /* Allow the option to add more cool cards by watching a video */

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Welcome G!</h2>
      <div className="toggle-options">
        <div className="option">
          <span className="option-text">Cards</span>
        </div>
        <div className="option">
          <span className="option-text">Options</span>
        </div>
      </div>
      <div className="cards-showcase">
        <div className="card-row">
          <img src="card image" alt="card image" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
