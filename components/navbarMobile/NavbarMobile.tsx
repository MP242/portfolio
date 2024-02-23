import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./NavbarMobile.module.scss";
import HamburgerSvg from "../svg/HamburgerSvg";
import SwitchLanguage from "../switchLanguage/SwitchLanguage";
import SwitchTheme from "../switchTheme/SwitchTheme";
import MenuMobile from "../menuMobile/MenuMobile";

const NavbarMobile = () => {
  const { t } = useTranslation("common");
  const [show, setShow] = useState(false);
  const showMenu = () => {
    console.log("showMenu");
    setShow(!show);
  };
  return (
    <div className={styles.container}>
      <div className={styles.container__icone}>
        <SwitchLanguage />
        <SwitchTheme />
      </div>
      <div className={styles.container__hamburger} onClick={showMenu}>
        <HamburgerSvg />
      </div>
      {show && <MenuMobile open={show} showMenu={showMenu} />}
    </div>
  );
};

export default NavbarMobile;
