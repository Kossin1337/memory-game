import React, { useState } from "react";

import ModalTemplate from "../../modal/ModalTemplate";

import "./SettingsModal.scss";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal = ({ isOpen, onClose }: IModal) => {
  // if logged in. Add reset progress & delete an account

  return (
    <ModalTemplate key="settings-modal" isOpen={isOpen} onClose={onClose}>
      <div className="settings">
        <span className="settings-header">Settings</span>
        <div className="theme-wrapper">
          <div className="themes-header">Change Theme</div>
          <div className="theme-selection">
            <div className="theme green">
              <span className="theme-title">Green</span>
            </div>
            <div className="theme yellow">
              <span className="theme-title">Yellow</span>
            </div>
            <div className="theme purple">
              <span className="theme-title">Purple</span>
            </div>
            <div className="theme blue">
              <span className="theme-title">Blue</span>
            </div>
            <div className="theme magenta">
              <span className="theme-title">Magenta</span>
            </div>
          </div>
        </div>
        <div className="reset-stats">Reset All Statistics</div>
        <div className="account-action">
          <div className="log-out">Logout</div>
          <div className="delete-account">Delete Account</div>
        </div>
      </div>
    </ModalTemplate>
  );
};

export default SettingsModal;
