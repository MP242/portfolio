import { useTheme } from "next-themes";
import styles from "./SwitchTheme.module.css";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div onClick={toggleTheme} className={styles.switchThemeContainer}>
        <img
          src={theme === "dark" ? "/images/SUN_OK.svg" : "/images/SUN_NOK.svg"}
          alt="theme_icon"
        />
      </div>
    </>
  );
};

export default SwitchTheme;
