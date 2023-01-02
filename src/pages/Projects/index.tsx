import styles from './styles.module.sass';
export function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.list}>
        <div className={styles.project}>
          <h2>NativeSec</h2>
          <p>
            Projeto desktop opensource que utiliza servico de criptografia com OpenPGP para guardar
            suas senhas em segurança
          </p>
          <div className={styles.tech}>
            <h3>Principais Tecnologias</h3>
            <ul>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>SASS</li>
              <li>OpenPGP</li>
              <li>SQL Cipher - SQLite3</li>
            </ul>
          </div>
          <a href="https://nativesec.io/" target="_blank" rel="noreferrer">
            Nativesec
          </a>
          <a href="">Github</a>
        </div>
        <div className={styles.project}>
          <h2>Timer Pomodoro</h2>
          <p>
            O método de pomodoro pode ser aplicado tanto no trabalho quanto no estudo para aumentar
            a concentração
          </p>
          <div className={styles.tech}>
            <h3>Principais Tecnologias</h3>
            <ul>
              <li>ReactJS</li>
              <li>Immer</li>
              <li>Styled-Components</li>
              <li>Reducers</li>
              <li>Context API</li>
            </ul>
          </div>
          <a href="https://ignite-timer-lovat-six.vercel.app/" target="_blank" rel="noreferrer">
            Timer Pomodoro
          </a>
          <a href="https://github.com/leonardoReizz/ReactJS-SPA">Github</a>
        </div>
        <div className={styles.project}>
          <h2>Notification Service</h2>
          <p>Um Microserviço desenvolvido em NESTJS para envio de notificacoes a uma aplicação</p>
          <div className={styles.tech}>
            <h3>Principais Tecnologias</h3>
            <ul>
              <li>NestJS</li>
              <li>Prisma</li>
              <li>MySQL</li>
              <li>Typescript</li>
            </ul>
          </div>
          <a href="https://github.com/leonardoReizz/notificationService">Github</a>
        </div>
      </div>
    </div>
  );
}
