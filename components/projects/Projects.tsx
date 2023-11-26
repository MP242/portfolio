import React from 'react'
import GithubSvg from '../svg/GithubSvg'
import DemoSvg from '../svg/DemoSvg'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className={styles.myProject} id="projects">
        <div>
          <h3>Portfolio</h3>
          <h4>Each project is a unique piece of development 🧩</h4>
        </div>
        <div className={styles.projectContainer}>
          <img src="/images/pc-dev.jpg" alt="developpeur fullstack" />
          <div>
            <h3>CAR RENTAL (FEBRUARY 2023) 🚗</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              voluptatum, voluptas, quas, quidem quia dolorum voluptatibus
              accusamus quibusdam doloremque quos natus. Quisquam, quae
              voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
              Quisquam, quae voluptates.
            </p>
            <div className={styles.projectStackContainer}>
              <p>VueJS</p>
              <p>Laravel</p>
            </div>
            <div className={styles.projectStackContainer}>
              <a href="https://www.github.com">
                code
                <GithubSvg />
              </a>
              <a href="https://www.github.com">
                live demo
                <DemoSvg />
              </a>
            </div>
          </div>
        </div>
        <p> mon projet 1</p>
        <p> mon projet 2</p>
      </section>
  )
}

export default Projects