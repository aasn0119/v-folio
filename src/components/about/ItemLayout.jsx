"use client";

const { motion } = require("framer-motion");
import clsx from "clsx";

const ItemLayout = ({ children, classname }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
        classname
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
