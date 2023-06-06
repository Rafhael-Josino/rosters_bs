import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DGHome from '../components/DG/DGHome';
import LOTRHome from '../pages/MDHome';

function routes() {
  return <Routes>
    <Route path='/*' element={<Home />} />
    <Route path='/DeathGuard/*' element={<DGHome />} />
    <Route path='/MiddleEarth/*' element={<LOTRHome />} />
  </Routes>
}

export default routes