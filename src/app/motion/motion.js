/* SIDEBAR */
export const sidebarVariant = {
  hidden: {
    opacity: 0,
    x: "-100%",
    transition: {
      type: "spring",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 0.5,
    },
  },
};

export const sidebarMenu = {
  closed: {
    rotate: [180, 0],
  },
  hover: {
    x: [-20, 20],
    transition: {
      repeat: Infinity,
      type: "tween",
      ease: "linear",
    },
  },
  open: { rotate: [0, 180] },
};

/* --- GAME SECTION  --- */
export const gridNavigation = {
  hidden: {
    scale: 0.25,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: 0,
    },
  },
};

/* GRID */
export const gridVariant = (delay) => ({
  hidden: {
    scale: 0.75,
    opacity: 0.7,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 1,
    },
  },
});

/* CARD */
export const cardVariant = (delay) => ({
  hidden: {
    scale: 0.25,
    opacity: 0,
  },
  clicked: {
    scale: 1.5,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 15,
      duration: 0.25,
      delay: 0.35,
    },
  },
  display: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.75,
      stiffness: 100,
      damping: 15,
      delay,
    },
  },
});

/* MODAL */
export const backdropVariants = {
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 75,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 75,
    },
  },
};

export const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0vh", opacity: 1 },
  exit: { y: "-100vh", opacity: 0 },
};

/* FOOTER */
export const footerVariant = {
  hidden: {
    opacity: 0,
    y: "100%",
    transition: {
      type: "spring",
      stiffness: 75,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 75,
      duration: 0.75,
      delay: 0,
    },
  },
};

/* COMMON - slide, fade, zoom */
export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

// export const staggerContainer = (staggerChildren, delayChildren) => ({
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren,
//       delayChildren,
//     },
//   },
// });
