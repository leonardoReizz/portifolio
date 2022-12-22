import { Projects } from '@pages/Projects';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { LayoutWithBars } from './LayoutWithBars';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWithBars />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}
