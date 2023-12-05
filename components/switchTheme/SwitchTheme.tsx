import { useTheme } from "next-themes";
import styles from "./SwitchTheme.module.scss";
import { useState } from "react";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const [svg, setSvg] = useState("/images/SUN_NOK.svg");

  const toggleTheme = () => {
    setSvg(
      svg === "/images/SUN_OK.svg"
        ? "/images/SUN_NOK.svg"
        : "/images/SUN_OK.svg"
    );
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={toggleTheme} className={styles.container}>
      <img src={svg} alt="theme_icon" />
    </div>
  );
};

export default SwitchTheme;
