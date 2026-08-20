import React from "react";
import { motion } from "framer-motion";

const HamburgerIcon = ({ isOpen, toggleOpen, className, color }) => {
  const topLineVariants = {
    open: {
      rotate: 45,
      translateY: 10,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    closed: {
      rotate: 0,
      translateY: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const middleLineVariants = {
    open: {
      opacity: 0,
      transition: { duration: 0.1 },
    },
    closed: {
      opacity: 1,
      transition: { duration: 0.1 },
    },
  };

  const bottomLineVariants = {
    open: {
      rotate: -45,
      translateY: -10,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    closed: {
      rotate: 0,
      translateY: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.div
      onClick={toggleOpen}
      className={`grid gap-1.5 group cursor-pointer z-50 ${className}`}
    >
      <motion.div
        style={{ backgroundColor: color }}
        className={`h-1 w-10 rounded-full`}
        variants={topLineVariants}
        animate={isOpen ? "open" : "closed"}
      />
      <motion.div
        style={{ backgroundColor: color }}
        className="h-1 w-10 rounded-full"
        variants={middleLineVariants}
        animate={isOpen ? "open" : "closed"}
      />
      <motion.div
        style={{ backgroundColor: color }}
        className="h-1 w-10 rounded-full"
        variants={bottomLineVariants}
        animate={isOpen ? "open" : "closed"}
      />
    </motion.div>
  );
};

export default HamburgerIcon;
