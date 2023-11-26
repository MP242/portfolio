import React from 'react'
import styles from "./Hero.module.css";
import GithubSvg from '../svg/GithubSvg';
import LinkedinSvg from '../svg/LinkedinSvg';
import { useTranslation } from 'next-i18next';

const Hero = () => {
    const { t } = useTranslation("common");
    
  return (
    <section className={styles.myProfile} id="home">
        <div className={styles.profileContainer}>
          <div className={styles.profileSubContainer}>
            <div className={styles.descriptionContainer}>
              <div className={styles.JobtitleContainer}>
                <h1>{t("jobTitle1")}</h1>
                <span className={styles.jobtitleSubContainer}>
                  <h1>{t("jobTitle2")}</h1>
                  <img
                    className={styles.jobtitleSvg}
                    src="/images/wave.svg"
                    alt="dev"
                  />
                </span>
              </div>
              <p id={styles.profilePresentation}>{t("presentation")}</p>
              <span>
                <a href="https://www.github.com" className="my-svg">
                  <GithubSvg />
                </a>
                <a href="https://www.linkedin.com" className="my-svg">
                  <LinkedinSvg />
                </a>
              </span>
            </div>
            <img
              src="/images/profile.png"
              alt="profile"
              className={styles.profileImg}
            />
          </div>
          <div className="stackContainer">
            {/* <p>Front-end</p> */}
            <ul>
              <li>
                <img
                  src="https://skillicons.dev/icons?i=react,vue&theme=dark"
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
                  src="https://skillicons.dev/icons?i=python,flask,scikitlearn&theme=dark"
                  alt="skill-icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default Hero