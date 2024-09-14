"use client";

import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState([]);

  useEffect(() => {
    const getScreenSize = () => {
      return window.innerWidth;
    };

    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
