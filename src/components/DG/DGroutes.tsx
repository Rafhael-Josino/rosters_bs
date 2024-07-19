import { Routes, Route } from 'react-router-dom';

import UnitsList from './UnitsList';
import LordOfContagion from './Units/LordOfContagion';
// import Leader from './Units/Leader';
// import HeavyGunner from './Units/HeavyGunner';
// import IconBearer from './Units/IconBearer';
// import Gunner from './Units/Gunner';
// import WarriorKrak from './Units/WarriorKrak';
// import WarriorBlight from './Units/WarriorBlight';

type Props = {
    lifeArray: number[],
    lifeArrayHandler: (index: number, newLife: number) => void,
    operatives: { name: string, life: number }[]
}

function DGroutes (props: Props) {
    const { lifeArray, lifeArrayHandler, operatives} = props;

    return <Routes>
        <Route 
          path='/*' 
          element={
            <UnitsList
              title="Death Guard"
              lifeArray={lifeArray} 
              lifeArrayHandler={lifeArrayHandler}
              operatives={operatives}
            />
          } 
        />
        <Route path='/Lord Of Contagion' element={<LordOfContagion />} />
        {/* <Route path='/Plague Marine Champion' element={<Leader />} />
        <Route path='/Heavy Gunner' element={<HeavyGunner />} />
        <Route path='/Icon Bearer' element={<IconBearer />} />
        <Route path='/Gunner' element={<Gunner />} />
        <Route path='/Warrior Krak' element={<WarriorKrak />} />
        <Route path='/Warrior Blight' element={<WarriorBlight />} /> */}
    </Routes>
}

export default DGroutes;