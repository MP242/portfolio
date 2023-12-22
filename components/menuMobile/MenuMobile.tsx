import React from "react";
import { useTranslation } from "next-i18next";
import styles from "./MenuMobile.module.scss";

type Props = {
    open: boolean;
}

const MenuMobile = (props:Props) => {
  const { t } = useTranslation("common");
  const { open } = props;
  return (
    <div className={`${open ? styles.open: styles.closed}`}>
      <nav className={styles.container}>
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
    </div>
  );
};

export default MenuMobile;
