import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DeathGuardOps from '../components/DG/Operatives';
import IronWarriorsOps from '../components/IronWarriors/Operatives';
import KillTeamHome from '../components/KillTeam/Home';
// import ChartContainer from '../components/ChartContainer';

function routes() {
  return <Routes>
    <Route path='/*' element={<Home />} />
    <Route path='/Death Guard/*' element={<KillTeamHome title='Death Guard' operatives={DeathGuardOps} />} />
    <Route path='/Iron Warriors/*' element={<KillTeamHome title='Iron Warriors' operatives={IronWarriorsOps} />} />
    {/* <Route path='/MiddleEarth/*' element={<ChartContainer />} /> */}
  </Routes>
}

export default routes