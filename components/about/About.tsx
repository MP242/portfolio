import React from "react";
import styles from "./About.module.scss";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <section id="about">
      <div className={styles.container}>
        <img src="/images/pc-dev.jpg" alt="developpeur fullstack" />
        <div className={styles.container__text}>
          <h4>{t("about me section")}</h4>
          <h3>{t("about me title")}</h3>
          <br />
          <p>{t("about me text1")}</p>
          <br />
          <p>{t("about me text2")}</p>
          <br />
          <p>{t("about me text3")}</p>
          <p>{t("about me text4")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
