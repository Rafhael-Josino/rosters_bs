import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../KillTeam/Header';
import UnitsList from '../KillTeam/UnitsList';
import Operatives from './Operatives';
import Warsmith from './Units/Warsmith';
import Warpsmith from './Units/Warpsmith';

function Home () {
  const [lifeArray, setLifeArray] = useState(Operatives.map(op => op.life));

  const lifeArrayHandler = (index: number, newLife: number) => {
    const newLifeArray = [
        ...lifeArray.slice(0, index), 
        newLife, 
        ...lifeArray.slice(index+1)
    ];

    sessionStorage.setItem('IronWarriorsLife', String(newLifeArray));

    setLifeArray(newLifeArray);
  }

  useEffect(() => {
    if (sessionStorage.getItem('IronWarriorsLife')) {
        setLifeArray(JSON.parse("[" + sessionStorage.getItem('IronWarriorsLife') + "]"));
    }
  }, []);

    return <div>
      <Header title={"Iron Warriors"}/>
      
      <div className='battlescribe'>
        <Routes>
          <Route 
            path='/*' 
            element={
              <UnitsList
                title="Iron Warriors"
                lifeArray={lifeArray} 
                lifeArrayHandler={lifeArrayHandler}
                operatives={Operatives}
                injuryImmunity={false}
              />
            } 
          />
          <Route path='/Warsmith' element={<Warsmith />} />
          <Route path='/Warpsmith' element={<Warpsmith />} />
        </Routes>
        <br/>
        <div className="summary battlescribe">
          <div className='faction_header'>FACTION ABILITIES</div>
          <div className='faction_box'>
            <span>SIEGE LORDS</span>
          </div>
          <p>
            When determining Line of Sight for each friendly Iron Warriors operative, enemy operatives within ⬟ of it are treated as having an Engage order unless they are in Cover from Heavy Terrain.
          </p>
          <br/>

          <div className='faction_header'>PSYCHIC ACTIONS</div>
          <p>
            The first time a friendly Iron Warriors psyker operative performs the Manifest Psychic Power action in each of its activations, select one psychic power from the list below to be resolved.
          </p>

          <div className='faction_box'>
            <span>CORRUPT MACHINE SPIRITS</span>
          </div>
          <p>
            Select one enemy operative Visible to this operative. Until the start of this operative’s next activation, until it’s incapacitated, or until this psychic power is selected again (whichever comes first):
          </p>
          <p>
            - Each time that enemy operative fights in combat or makes a shooting attack, in the Roll Attack Dice step of that shooting attack, your opponent cannot re-roll their attack dice.
          </p>
          <p>
            - That enemy operative ignores all positive modifiers to its APL.
          </p>
          
          <div className='faction_box'>
            <span>MALIGNANT UPGRADE</span>
          </div>
          <p>
            Select one friendly Iron Warriors operative Visible to this operative. Until the end of the Turning Point, weapons that operative is equipped with gain the Lethal 5+, No Cover and Brutal special rules.
          </p>
          <br/>
        </div>

        <div className="summary battlescribe">
          <div className='faction_header'>STRATEGIC PLOYS</div>
          <div className='faction_box'>
            <span>IRON WITHIN!</span>
            <span>1 CP</span>
          </div>
          <p>
            Until the end of the Turning Point, all friendly Iron Warriors operators:
          </p>
          <p>
            - Are not treated as Injuried
          </p>
          <p>
            - Ignore all APL negative modifiers
          </p>
          <br/>

          <div className='faction_box'>
            <span>IRON WITHOUT!</span>
            <span>1 CP</span>
          </div>
          <p>
            Until the end of the Turning Point, each time a friendly Iron Warriors operative is activated, if it does not perform a Fight action during that activation, it can perform two Shoot actions during that activation.
          </p>
          <br/>

          <div className='faction_box'>
            <span>FROM IRON COMETH STRENGHT!</span>
            <span>1 CP</span>
          </div>
          <p>
            Until the end of the Turning Point, each time a friendly Iron Warriors operative is the target of a shooting attack, a Normal Defense roll can be retained as a Critical Defense.
          </p>
          <br/>

          <div className='faction_box'>
            <span>IRON SUPREMACY</span>
            <span>1 CP</span>
          </div>
          <p>
            Until the end of the Turning Point:
          </p>
          <p>
            - Cada vez que um operativo aliado Iron Warriors  que está dentro de 2" um marcador objetivo ou dentro de 6" da zona de lançamento do seu oponente faz um ataque de tiro, na etapa de Rolagem de Dados de Ataque desse ataque de tiro, você pode rolar novamente um dos seus dados de ataque.
          </p>
          <p>
            - Cada vez que um operativo aliado Iron Warriors Gunner, Heavy Gunner ou Obliterator que não se moveu durante o Turning Point faz um ataque de tiro. Na etapa de Rolagem de Dados de Ataque desse ataque de tiro, você pode rolar novamente um dos seus dados de ataque.
          </p>
          <br/>

        </div>
        
        <div className="summary battlescribe">
          <div className='faction_header'>TACTICAL PLOYS</div>
          <div className='faction_box'>
            <span>UNFINISHED WARFARE</span>
            <span>1 CP</span>
          </div>
          <p>
            Use esta estratégia tática quando um operativo aliado Iron Warriors estiver incapacitado. Antes que o agente seja removido da zona de morte, ele pode realizar uma ação de Atirar gratuita. A menos que especificado de outra forma, o operativo é tratado como ferido.
          </p>
          <br/>

          <div className='faction_box'>
            <span>CALCULATED ERRADICATION</span>
            <span>1 CP</span>
          </div>
          <p>
          Use esta estratégia tática quando um operativo aliado Iron Warriors for ativado. Nesta ativação, aquele operativo pode realizar ações de Atirar, mesmo que tenha uma ordem de Ocultar.
          </p>
          <br/>

          <div className='faction_box'>
            <span>TRACING THE VICTIM</span>
            <span>1 CP</span>
          </div>
          <p>
            Use this Tactical Ploy in the Set Up Operatives step of the mission sequence. 
          </p>
          <p>
            Select one friendly Iron Warriors operative. That operative can be set up with a Conceal order anywhere on the battlefield that is within 🔺 of Heavy terrain and more than 6" from enemy operatives and the enemy drop zone. You can only use it once per battle, and that operative cannot have its order changed in the first Turning Point (i.e. from the Infiltrate scouting option).
          </p>
          <br/>

          <div className='faction_box'>
            <span>STRATEGIC REPOSITION</span>
            <span>1 CP</span>
          </div>
          <p>
            Selecione um operativo aliado Iron Warriors que é está mais do que 🟦 de operativos inimigos. Esse agente, e todos os outros operativos aliados Iron Warriors dentro de 🟦 daquele operativo e mais do que 🟦 de agentes inimigos, pode executar imediatamente uma ação de Dash gratuita. Você não pode usar este Strategic Ploy durante o primeiro Turning Point e pode ser usado somente uma vez por Turning Point.
          </p>
          <br/>
        </div>
      </div>
    </div>
}

export default Home;