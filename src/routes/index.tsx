import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DeathGuardOps from '../components/DG/Operatives';
import DeathGuardHome from '../components/KillTeam/Home';
// import ChartContainer from '../components/ChartContainer';

function routes() {
  return <Routes>
    <Route path='/*' element={<Home />} />
    <Route path='/DeathGuard/*' element={<DeathGuardHome title='Death Guard' operatives={DeathGuardOps} />} />
    {/* <Route path='/MiddleEarth/*' element={<ChartContainer />} /> */}
  </Routes>
}

export default routes