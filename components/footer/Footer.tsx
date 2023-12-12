import React from "react";
import style from "./Footer.module.scss";
import GithubSvg from "../svg/GithubSvg";
import LinkedinSvg from "../svg/LinkedinSvg";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className={style.container}>
      <h3>{t([`common`, `footerSection.text`])}</h3>
      <span className={style.container__stack}>
        <a
          href="https://www.github.com/MP242"
          aria-label="Profil github de Marc Pollet"
          className={style.container__stack__item}
        >
          <GithubSvg />
        </a>
        <a
          href="https://www.linkedin.com/in/marcpollet242/"
          aria-label="Profil LinkedIn de Marc Pollet"
          className={style.container__stack__item}
        >
          <LinkedinSvg />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
