import React from "react";
import style from "./Contact.module.scss";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const { t } = useTranslation("common");

  return (
    <section id="contact">
      <div className={style.container}>
        <h4>{t([`common`, `contactSection.title`])}</h4>
        <div className={style.container__content}>
          <p className={style.container__content__text}>
            {t([`common`, `contactSection.getInTouch`])}
          </p>
          <div className={style.container__content__contactContainer}>
            <div className={style.container__content__contactContainer__contact}>
              <a
                className={style.container__content__contactContainer__contact__icone}
                href="mailto:marc.pollet242@gmail.com"
                aria-label="Email de Marc Pollet"
              >
                📩
              </a>
              <div className={style.container__content__contactContainer__contact__text}>
                <h4>{t([`common`, `contactSection.email`])}</h4>
                {/* <p>{t([`common`, `contactSection.myEmail`])}</p> */}
                <a
                  className={style.container__content__contactContainer__contact__text__link}
                  href="mailto:marc.pollet242@gmail.com"
                aria-label="Email de Marc Pollet"
                >
                  {t([`common`, `contactSection.myEmail`])}
                </a>
              </div>
            </div>
            <div className={style.container__content__contactContainer__contact}>
              <a
                className={style.container__content__contactContainer__contact__icone}
                href="tel:+262693515332"
                aria-label="Telephone de Marc Pollet"
              >
                📞
              </a>
              <div className={style.container__content__contactContainer__contact__text}>
                <h4>{t([`common`, `contactSection.phone`])}</h4>
                <a
                  className={style.container__content__contactContainer__contact__text__link}
                  href="tel:+262693515332"
                >
                  {t([`common`, `contactSection.myPhone`])}
                </a>
                {/* <p>{t([`common`, `contactSection.myPhone`])}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
