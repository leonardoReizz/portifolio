import profilePicture from '@assets/profile.png';
import { HiOutlineDownload } from 'react-icons/hi';
import { BsCheck } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import styles from './styles.module.sass';

export function ProfileBar() {
  return (
    <div className={styles.profileBar}>
      <header>
        <img src={profilePicture} alt="" />
        <h3>Leonardo Reis</h3>
        <div>
          <p>Front-end Developer</p>
          <p>Back-end Developer</p>
        </div>
      </header>
      <main>
        <section className={styles.list}>
          <h3>Skills</h3>
          <ul>
            <li>
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                <BsCheck />
                Typescript
              </a>
            </li>
            <li>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <BsCheck />
                ReactJS
              </a>
            </li>
            <li>
              <a href="">
                <BsCheck />
                SASS
              </a>
            </li>
            <li>
              <a href="">
                <BsCheck />
                Styled Components
              </a>
            </li>
            <li>
              <a href="">
                <BsCheck />
                PHP
              </a>
            </li>
            <li>
              <a href="">
                <BsCheck />
                NodeJS
              </a>
            </li>
            <li>
              <a href="">
                <BsCheck />
                Express
              </a>
            </li>
            <li>
              <a href="">
                <BsCheck />
                NestJS
              </a>
            </li>
            <li>
              <a href="">
                <BsCheck />
                MongoDB
              </a>
            </li>
            <li>
              <a href="">
                <BsCheck />
                Mysql
              </a>
            </li>
            <li>
              <a href="">
                <BsCheck />
                Git
              </a>
            </li>
            <li>
              <a href="">
                <BsCheck />
                GitLab
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.list}>
          <h3>Cursos</h3>
          <ul>
            <li>
              <a href="">
                {' '}
                <BsCheck />
                ReactJS
              </a>
            </li>
            <li>
              <a href="">
                {' '}
                <BsCheck />
                NodeJS
              </a>
            </li>
            <li>
              <a href="">
                {' '}
                <BsCheck />
                Git
              </a>
            </li>
            <li>
              <a href="">
                {' '}
                <BsCheck />
                Docker/Kubernets
              </a>
            </li>
            <li>
              <a href="">
                {' '}
                <BsCheck />
                Linux
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.cv}>
          <a>
            Download CV <HiOutlineDownload />
          </a>
        </section>
      </main>

      <footer>
        <a href="">{<FaLinkedin />}</a>
        <a href="">{<AiOutlineGithub />}</a>
      </footer>
    </div>
  );
}
