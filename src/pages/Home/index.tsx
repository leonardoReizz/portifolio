import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import styles from './styles.module.sass';

export function Home() {
  const navigate = useNavigate();
  function handleProjects() {
    navigate('projects');
  }
  return (
    <div className={styles.home}>
      <header>
        <h1>Descubra meu incrivel espaço de projetos</h1>
        <p>
          {'<'}
          <span className={styles.code}>code</span>
          {'>'}
          <ul className={styles.dynamicText}>
            <li>
              <span>
                Desenvolvedor FrontEnd {'</'}
                <span className={styles.code}>code</span>
                {'>'}
              </span>
            </li>
            <li>
              <span>
                Desenvolvedor BackEnd {'</'}
                <span className={styles.code}>code</span>
                {'>'}
              </span>
            </li>
            <li>
              <span>
                Desenvolvedor React & NodeJS {'</'}
                <span className={styles.code}>code</span>
                {'>'}
              </span>
            </li>
          </ul>
        </p>
        <button type="button" onClick={handleProjects}>
          Projetos
        </button>
      </header>
      <main>
        <div className={styles.experience}>
          <div className={styles.item}>
            <p>
              <span>2+</span> Anos de experiencia
            </p>
          </div>
          <div className={styles.item}>
            <p>
              <span>0</span> Projetos Completados
            </p>
          </div>
          <div className={styles.item}>
            <p>
              <span>3</span> Cursos concluidos
            </p>
          </div>
        </div>
        <div className={styles.services}>
          <div className={styles.box}>
            <h3>Desenvolvimento Landing Pages</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima delectus provident
              exercitationem saepe cupiditate tenetur excepturi ad quae doloribus quos. Quia
              repellendus placeat aliquid recusandae dicta nihil ut vitae inventore!
            </p>
            <Link to="/contact">
              Entre em contato <BsArrowRightShort />
            </Link>
          </div>
          <div className={styles.box}>
            <h3>Desenvolvimento Sistemas WEB</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima delectus provident
              exercitationem saepe cupiditate tenetur excepturi ad quae doloribus quos. Quia
              repellendus placeat aliquid recusandae dicta nihil ut vitae inventore!
            </p>
            <Link to="/contact">
              Entre em contato <BsArrowRightShort />
            </Link>
          </div>
          <div className={styles.box}>
            <h3>Desenvolvimento Sistemas BackEnd</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima delectus provident
              exercitationem saepe cupiditate tenetur excepturi ad quae doloribus quos. Quia
              repellendus placeat aliquid recusandae dicta nihil ut vitae inventore!
            </p>
            <Link to="/contact">
              Entre em contato <BsArrowRightShort />
            </Link>
          </div>
          <div className={styles.box}>
            <h3>Desenvolvimento de micro serviços</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima delectus provident
              exercitationem saepe cupiditate tenetur excepturi ad quae doloribus quos. Quia
              repellendus placeat aliquid recusandae dicta nihil ut vitae inventore!
            </p>
            <Link to="/contact">
              Entre em contato <BsArrowRightShort />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
