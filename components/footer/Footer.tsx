import React from "react";
import style from "./Footer.module.scss";
import GithubSvg from "../svg/GithubSvg";
import LinkedinSvg from "../svg/LinkedinSvg";

const Footer = () => {
  return (
    <footer className={style.container}>
      <h3>Copyright © 2023. All rights are reserved</h3>
      <span className={style.container__stack}>
        <a
          href="https://www.github.com"
          className={style.container__stack__item}
        >
          <GithubSvg />
        </a>
        <a
          href="https://www.linkedin.com"
          className={style.container__stack__item}
        >
          <LinkedinSvg />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
