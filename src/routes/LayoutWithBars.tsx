import { Navbar } from '@components/Navbar';
import { Outlet } from 'react-router-dom';
import { ProfileBar } from '../components/ProfileBar';
import styles from './styles.module.sass';
export function LayoutWithBars() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.appContent}>
        <ProfileBar />
        <Outlet />
        <Navbar />
      </div>
    </div>
  );
}
