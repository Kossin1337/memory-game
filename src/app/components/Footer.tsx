"use client";
import React from "react";

import "./Footer.scss";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="main-content">
        {/* <span className="made-by">&copy ${date} Kossin</span> */}
      </div>
    </div>
  );
};

export default Footer;
