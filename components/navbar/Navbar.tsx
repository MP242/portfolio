import SwitchLanguage from "../switchLanguage/SwitchLanguage";
import SwitchTheme from "../switchTheme/SwitchTheme";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <SwitchLanguage />
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <SwitchTheme />
      </div>
    </>
  );
};

export default Navbar;
