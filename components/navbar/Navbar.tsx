import SwitchLanguage from "../switchLanguage/SwitchLanguage";
import SwitchTheme from "../switchTheme/SwitchTheme";
import styles from "./Navbar.module.scss";
import { useTranslation } from "next-i18next";

const Navbar = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={styles.navbarContainer}>
        <SwitchLanguage />
        <nav>
          <ul>
            <li>
              <a href="#home">{t("home")}</a>
            </li>
            <li>
              <a href="#about">{t("about")}</a>
            </li>
            <li>
              <a href="#projects">{t("projects")}</a>
            </li>
            <li>
              <a href="#contact">{t("contact")}</a>
            </li>
          </ul>
        </nav>
        <SwitchTheme />
      </div>
    </>
  );
};

export default Navbar;
