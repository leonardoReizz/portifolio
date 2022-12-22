import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { LayoutWithBars } from './LayoutWithBars';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWithBars />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
