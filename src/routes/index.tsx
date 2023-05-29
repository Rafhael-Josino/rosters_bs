import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DGHome from '../components/DG/DGHome';
import WarriorComponent from '../components/Middle-Earth/WarriorComponent';

// temporary info
const temp = {
  name: 'goblin',
  hero: false,
  points: 0,
  chosenPath: 'Evil',
  status: {
    move: 5,
    f: 2,
    strength: 3,
    defense: 4,
    attack: 1,
    wounds: 1,
    courage: 2,
  },
  powers: {
    might: 0,
    will: 0,
    fate: 0,
  },
  wargear: 'spear',
  specialRules: '',
  injuries: '',
  xp: 0,
}

function routes() {
  return <Routes>
    <Route path='/*' element={<Home />} />
    <Route path='/DeathGuard/*' element={<DGHome />} />
    <Route path='/MiddleEarth/' element={<WarriorComponent characterInfo={temp} />} />
  </Routes>
}

export default routes