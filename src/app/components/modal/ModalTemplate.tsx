import React, { MouseEvent, MouseEventHandler, useCallback } from "react";
import { motion } from "framer-motion";

import { CloseIcon } from "../game/icons/CloseIcon";
import { backdropVariants, modalVariants } from "@/app/motion/motion";

import "./ModalTemplate.scss";

interface IModalTemplate {
  children: React.ReactNode[] | React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

/* Add animation for modal */

const ModalTemplate = ({ children, isOpen, onClose }: IModalTemplate) => {
  const handleClick = (e: MouseEvent) => {
    onClose();
  };

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleClick}
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            exit="exit"
            onClick={handleContentClick}
          >
            <button className="modal-close" onClick={onClose}>
              <CloseIcon />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ModalTemplate;
