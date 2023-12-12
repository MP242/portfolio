import React from "react";
import GithubSvg from "../svg/GithubSvg";
import DemoSvg from "../svg/DemoSvg";
import styles from "./Projects.module.scss";
import { projectData } from "../../pages/api/projectData";
import { useTranslation } from "next-i18next";

type Project = {
  id: number;
  name: string;
  href: string;
  src: string;
  title: string;
  description: string;
  stack: string[];
  gitHubLink: string;
  demoLink: string;
};

const Projects = () => {
  const { t } = useTranslation("common");

  return (
    <section id="projects">
      <div className={styles.container}>
        <h4>{t("portfolio")}</h4>
        <h3>{t("portfolio title")}</h3>

        {projectData.map((project: Project) => {
          return (
            <div key={project.id} className={styles.container__projects}>
              <div className={styles.container__projects__img}>
                <a href={project.href} aria-label="projet de Marc Pollet" >
                  <img src={project.src} alt="developpeur fullstack" />
                </a>
              </div>
              <div className={styles.container__projects__text}>
                <h3>{t([`common`, `${project.name}.title`])}</h3>
                <p>{t([`common`, `${project.name}.description`])}</p>
                <div className={styles.container__projects__text__stack}>
                  {project.stack.map((tech) => (
                    <p key={tech}>{tech}</p>
                  ))}
                </div>
                <div className={styles.container__projects__text__links}>
                  <a href={project.gitHubLink} aria-label="Lien vers le github de Marc Pollet">
                    code
                    <GithubSvg />
                  </a>
                  <a href={project.demoLink} aria-label="Lien vers le projet de Marc Pollet">
                    live demo
                    <DemoSvg />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
