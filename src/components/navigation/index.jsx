"use client";

import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, //
    },
  },
};

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  console.log(size);

  const isLarge = size > 1024;
  const isMedium = size > 768;

  return (
    <div className="fixed flex items-center justify-center h-screen w-full">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex items-center justify-center relative w-max animate-spin-slow hover:pause group"
            >
              {BtnList.map((btn, index) => {
                const angleRadian = (angleIncrement * index * Math.PI) / 180;
                const radius = isLarge
                  ? `calc(20vw - 1rem)`
                  : isMedium
                  ? `calc(30vw - 1rem)`
                  : `calc(40vw - 1rem)`;

                const x = `calc(${radius} * ${Math.cos(angleRadian)})`;
                const y = `calc(${radius} * ${Math.sin(angleRadian)})`;
                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full xs:w-max px-2.5 xs:p-0 flex flex-col space-y-4 items-start xs:items-center justify-center relative group"
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full xs:w-max px-2.5 xs:p-0 flex flex-col space-y-4 items-end xs:items-center justify-center relative group"
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                        labelDirection="left"
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
