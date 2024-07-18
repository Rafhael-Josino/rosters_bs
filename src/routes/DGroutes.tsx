import { Routes, Route } from 'react-router-dom';
import UnitsList from '../components/DG/UnitsList';
import LordOfContagion from '../components/DG/Units/LordOfContagion';
import Leader from '../components/DG/Units/Leader';
import HeavyGunner from '../components/DG/Units/HeavyGunner';
import IconBearer from '../components/DG/Units/IconBearer';
import Gunner from '../components/DG/Units/Gunner';
import WarriorKrak from '../components/DG/Units/WarriorKrak';
import WarriorBlight from '../components/DG/Units/WarriorBlight';

type Props = {
    lifeArray: number[],
    lifeArrayHandler: (index: number, newLife: number) => void,
    operatives: { name: string, life: number}[]
}

function DGroutes (props: Props) {
    const { lifeArray, lifeArrayHandler, operatives} = props;

    return <Routes>
        <Route 
          path='/*' 
          element={
            <UnitsList 
              lifeArray={lifeArray} 
              lifeArrayHandler={lifeArrayHandler}
              operatives={operatives}
            />
          } 
        />
        <Route path='/Lord Of Contagion' element={<LordOfContagion />} />
        <Route path='/Plague Marine Champion' element={<Leader />} />
        <Route path='/Heavy Gunner' element={<HeavyGunner />} />
        <Route path='/Icon Bearer' element={<IconBearer />} />
        <Route path='/Gunner' element={<Gunner />} />
        <Route path='/Warrior Krak' element={<WarriorKrak />} />
        <Route path='/Warrior Blight' element={<WarriorBlight />} />
    </Routes>
}

export default DGroutes;