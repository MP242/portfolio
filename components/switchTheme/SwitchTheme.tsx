import { useTheme } from "next-themes";
import styles from "./SwitchTheme.module.scss";
import { useState } from "react";
import MoonSvg from "../svg/MoonSvg";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={toggleTheme} className={styles.container}>
      <MoonSvg />
    </div>
  );
};

export default SwitchTheme;
