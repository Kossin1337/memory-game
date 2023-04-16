"use client";
import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-content">
        <div className="icons">settings</div>
        <span className="made-by">{`&copy ${new Date().getFullYear()} Kossin`}</span>
      </div>
    </div>
  );
};

export default Footer;
