import React from "react";
import style from "./Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact">
      <div className={style.container}>
        <h4>CONTACT</h4>
        <div className={style.container__content}>
          <p className={style.container__content__text}>
            Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
          </p>
          <div className={style.container__content__email}>
            <a href="mailto:marc.pollet242@gmail.com">📩</a>
            <div className={style.container__content__email__text}>
              <h4>EMAIL</h4>
              <p>Marc.pollet242@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
