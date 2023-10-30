import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DGHome from '../components/DG/DGHome';
// import MDHome from '../pages/MDHome';

// Without warbands loading, only wound charts
import ChartContainer from '../components/ChartContainer';

function routes() {
  return <Routes>
    <Route path='/*' element={<Home />} />
    <Route path='/DeathGuard/*' element={<DGHome />} />
    <Route path='/MiddleEarth/*' element={<ChartContainer />} />
  </Routes>
}

export default routes