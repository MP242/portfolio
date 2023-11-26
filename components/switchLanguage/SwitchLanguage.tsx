import router from "next/router";
import styles from "./SwitchLanguage.module.css";

const SwitchLanguage = () => {

  const switchLanguage = (langue : string) => {
    router.push(router.pathname, router.asPath, {
      locale: langue,
    });
  };
  return (
    <div className={styles.switchLanguageContainer}>
      <img className="flag" onClick={() => switchLanguage("fr")} src="/images/FLAG_FR.svg" alt="Flag" />
      <img className="flag" onClick={()=> switchLanguage("en")} src="/images/FLAG_EN.svg" alt="Flag" />
    </div>
  );
};

export default SwitchLanguage;
