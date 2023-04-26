/* NAVIGATION */
export const navVariants = {
  hidden: {
    opacity: 0,
    y: -80,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      delay: 0.25,
    },
  },
};

export const navMenuVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
    transition: {
      type: "spring",
      stiffness: 25,
      damping: 150,
    },
  },
  mobileOpen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 75,
      duration: 0.15,
    },
  },
  mobileClosed: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 0.15,
    },
  },
};

/* MAIN SECTION */
export const mainHeroTextVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.25,
      delay,
    },
  },
});

export const mainSubTextVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.25,
      delay,
    },
  },
});

export const mainLinks = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const gifVariant = (delay) => ({
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
      delay,
    },
  },
});

/* FEATURED PROJECTS */
export const projectButtonVariant = (delay) => ({
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
      delay,
    },
  },
});

/* ABOUT */

/* CONTACT */

// CONTACT ALERT
export const contactAlertVariant = () => ({
  hidden: {
    y: "-75vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
});

/* FOOTER */
export const footerVariants = {
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
      duration: 0.5,
      delay: 0,
    },
  },
};

/* COMMON */
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

export const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

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
