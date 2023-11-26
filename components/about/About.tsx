import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutContainer}>
        <img src="/images/pc-dev.jpg" alt="developpeur fullstack" />
        <div className={styles.aboutDescription}>
          <h3> About me</h3>
          <h4>
            A dedicated Fullstack developer based in St-Leu, at La Réunion.📍
          </h4>
          <p>
            Hello! I'm Marc Pollet, a fullstack developer driven by a deep
            passion for technology and an engineering background. With a journey
            that spans over 7 years in the industrial sector, I've transitioned
            into the dynamic and ever-evolving realm of web development.
          </p>
          <p>
            In the last two years, I've been immersing myself in crafting
            digital solutions that stand out for their innovation and
            efficiency. My expertise ranges from front-end design, where I
            prioritize user experience and aesthetic appeal, to the intricate
            workings of back-end development, where functionality and
            performance are key. I have a particular fondness for weaving
            together design principles with complex data algorithms,
            transforming abstract ideas into concrete, engaging digital
            products.
          </p>
          <p>
            What sets me apart? It's my ability to blend technical prowess with
            creative thinking, ensuring that every project not only meets but
            exceeds expectations. I approach each challenge with a comprehensive
            viewpoint, considering every angle to deliver web experiences that
            are not just optimized, but also memorable and impactful. My
            engineering mindset contributes to this, enabling me to approach
            problems with a unique perspective, ensuring robust and scalable
            solutions. In summary, my journey from an engineer to a fullstack
            developer has been driven by a quest for learning and a desire to
            make a tangible impact in the digital world. I am excited about the
            potential of technology to transform ideas into reality and am
            always looking for opportunities to push the boundaries of what's
            possible in web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
