import React from "react";
import { useTranslation } from "next-i18next";
import styles from "./MenuMobile.module.scss";

interface menuMobileProps {
  open: boolean;
  showMenu: () => void;
}

const MenuMobile = ({ open, showMenu }: menuMobileProps) => {
  const { t } = useTranslation("common");
  return (
    <div className={`${open ? styles.open : styles.closed}`}>
      <nav className={styles.container}>
        <ul>
          <li>
            <a href="#home" onClick={showMenu}>
              {t("home")}
            </a>
          </li>
          <li>
            <a href="#about" onClick={showMenu}>
              {t("about")}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={showMenu}>
              {t("projects")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={showMenu}>
              {t("contact")}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;
