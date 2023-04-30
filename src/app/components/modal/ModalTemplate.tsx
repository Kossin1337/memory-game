import React, { useCallback } from "react";
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
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
      }
    },
    [onClose]
  );

  return (
    <>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            exit="exit"
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
