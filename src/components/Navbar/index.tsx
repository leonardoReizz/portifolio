import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './styles.module.sass';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  function handleMenu() {
    setOpen((state) => !state);
  }
  return (
    <div className={`${styles.navbar} ${open && styles.open}`}>
      <header>
        <button type="button" onClick={handleMenu}>
          {!open && <FiMenu />}
          {open && <AiOutlineClose />}
        </button>
      </header>
      <main>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/">Historico</Link>
          </li>
          <li>
            <Link to="/">Portifolio</Link>
          </li>
          <li>
            <Link to="/">Contato</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
