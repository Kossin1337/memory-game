import React, { useState } from "react";

import { SettingsIcon } from "./icons/SettingsIcon";
import SettingsModal from "./settings/SettingsModal";

import "./GameNavigation.scss";

const GameNavigation = () => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  return (
    <div className="game-navigation">
      {openSettings && (
        <SettingsModal
          isOpen={openSettings}
          onClose={() => setOpenSettings(false)}
        />
      )}
      <h1 className="navigation-header">Match the cards</h1>
      <div
        className="grid-icon"
        onClick={() => setOpenSettings((prev) => !prev)}
      >
        <SettingsIcon />
      </div>
      <div
        className="settings-icon"
        onClick={() => setOpenSettings((prev) => !prev)}
      >
        <SettingsIcon />
      </div>
    </div>
  );
};

export default GameNavigation;
