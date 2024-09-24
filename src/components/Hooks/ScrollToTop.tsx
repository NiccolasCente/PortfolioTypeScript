import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../../assets/ScrollToTop.css";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="arrow-icon" />
    </button>
  );
};

export default ScrollToTop;