import React from "react";
import "./CardDecks.scss";

const CardDecks = () => {
  /* Here user would be able to change between different decks */
  /* store them in local storage or add something like Redux */
  /* Redux however would be pretty cool for future */

  return (
    <div className="decks-wrapper">
      <div className="decks">
        <div className="deck">
          <span className="deck-name">DRUGS</span>
          <div className="image"></div>
          <span className="deck-count">10/21</span>
        </div>
      </div>
    </div>
  );
};

export default CardDecks;
