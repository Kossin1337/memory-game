"use client";
import React from "react";

import { motion } from "framer-motion";
import { footerVariant } from "../../motion/motion";

import "./Footer.scss";

const Footer = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={footerVariant}
      className="footer"
    >
      <div className="main-content">
        <p className="made-by">{`Copyright ${new Date().getFullYear()} Kossin`}</p>
      </div>
    </motion.div>
  );
};

export default Footer;
