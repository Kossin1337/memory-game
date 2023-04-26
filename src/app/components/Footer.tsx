"use client";
import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-content">
        <p className="made-by">{`Copyright ${new Date().getFullYear()} Kossin`}</p>
      </div>
    </div>
  );
};

export default Footer;
