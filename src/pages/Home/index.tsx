import { useNavigate } from 'react-router-dom';
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
      <main></main>
    </div>
  );
}
