import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// import IronWarriors from '../components/IronWarriors';
// import DeathGuard from '../components/DeathGuard';
import OWChartContainer from '../components/OldWorld/OWChartContainer';
import MEChartContainer from '../components/Middle-Earth/MEChartContainer';

function routes() {
  return <Routes>
    <Route path='/*' element={<Home />} />
    {/* <Route path='/Iron Warriors/*' element={<IronWarriors />} />
    <Route path='/Death Guard/*' element={<DeathGuard />} /> */}
    <Route path='/MiddleEarth/*' element={<MEChartContainer />} />
    <Route path='/OldWorld/*' element={<OWChartContainer />} />
  </Routes>
}

export default routes