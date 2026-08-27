import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import IronWarriors from '../components/IronWarriors';
import DeathGuard from '../components/DeathGuard';

function routes() {
  return <Routes>
    <Route path='/*' element={<Home />} />
    <Route path='/Iron Warriors/*' element={<IronWarriors />} />
    <Route path='/Death Guard/*' element={<DeathGuard />} />
    {/* <Route path='/MiddleEarth/*' element={<ChartContainer />} /> */}
  </Routes>
}

export default routes