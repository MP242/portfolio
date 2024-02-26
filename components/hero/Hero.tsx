import React from "react";
import styles from "./Hero.module.scss";
import GithubSvg from "../svg/GithubSvg";
import LinkedinSvg from "../svg/LinkedinSvg";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <section id="home">
      <div className={styles.container}>
        <div className={styles.container__content}>
          <div className={styles.container__content__profile}>
            <div className={styles.container__content__profile__title}>
              <h1>{t("jobTitle1")}</h1>
              <span
                className={styles.container__content__profile__title__titleRow}
              >
                <h1>{t("jobTitle2")}</h1>
                <img
                  className={
                    styles.container__content__profile__title__titleRow__svg
                  }
                  src="/images/wave.svg"
                  alt="dev"
                />
              </span>
            </div>
            <p className={styles.container__content__profile__presentation}>
              {t("presentation")}
            </p>
            <span className={styles.container__content__profile__stack}>
              <a
                href="https://github.com/MP242"
                aria-label="Profil github de Marc Pollet"
                className={styles.container__content__profile__stack__item}
              >
                <GithubSvg />
              </a>
              <a
                href="https://www.linkedin.com/in/marcpollet242/"
                aria-label="Profil LinkedIn de Marc Pollet"
                className={styles.container__content__profile__stack__item}
              >
                <LinkedinSvg />
              </a>
            </span>
          </div>
          <img
            src="/images/profile.png"
            alt="profile"
            className={styles.container__content__profileImg}
          />
        </div>
        <div className={styles.container__skills}>
          {/* <p>Front-end</p> */}
          <ul>
            <li>
              <img
                src="https://skillicons.dev/icons?i=react,vuejs,nextjs&theme=dark"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=tailwind,sass,figma&theme=dark"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=nest,express,laravel&theme=dark"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=python,flask,fastapi&theme=dark"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="/images/langchain.png"
                alt="langchain"
                style={{ width: "48px"}}
                // className={styles.container__content__profileImg}
              />
              <img
                src="/images/openai.png"
                alt="openai"
                style={{ width: "48px", marginLeft: "8px" }}
                // className={styles.container__content__profileImg}
              />
              <img
                src="/images/mistral.png"
                alt="mistral"
                style={{ width: "48px", marginLeft: "8px" }}
                // className={styles.container__content__profileImg}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
