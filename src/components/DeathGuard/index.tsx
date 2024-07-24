import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../KillTeam/Header';
import UnitsList from '../KillTeam/UnitsList';
import Operatives from './Operatives';
import LordOfContagion from './Units/LordOfContagion';

function Home () {
  const [lifeArray, setLifeArray] = useState(Operatives.map(op => op.life));

  const lifeArrayHandler = (index: number, newLife: number) => {
    const newLifeArray = [
        ...lifeArray.slice(0, index), 
        newLife, 
        ...lifeArray.slice(index+1)
    ];

    sessionStorage.setItem('DeathGuardLife', String(newLifeArray));

    setLifeArray(newLifeArray);
  }

  useEffect(() => {
    if (sessionStorage.getItem('DeathGuardLife')) {
        setLifeArray(JSON.parse("[" + sessionStorage.getItem('IronWarriorsLife') + "]"));
    }
  }, []);

    return <div>
      <Header title={"Death Guard"}/>
      
      <div className='battlescribe'>
        <Routes>
          <Route 
            path='/*' 
            element={
              <UnitsList
                title="Death Guard"
                lifeArray={lifeArray} 
                lifeArrayHandler={lifeArrayHandler}
                operatives={Operatives}
                injuryImmunity={true}  
              />
            } 
          />
          <Route path='/Lord Of Contagion' element={<LordOfContagion />} />
        </Routes>
        <br/>
        <div className="summary battlescribe">
          <div className='list_header'>Abilities</div>
          <p> --</p>
          <div className='list_header'>Strategic Ploys</div>
          <p> --</p>
          <div className='list_header'>Tactical Ploys</div>
          <p> --</p>
        </div>
      </div>
    </div>
}

export default Home;