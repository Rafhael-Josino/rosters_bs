import { useState, useEffect } from 'react';
import { Operatives } from '../../utils/types';
import Header from './Header';
import DGroutes from '../../routes/DGroutes';

type Props = {
  title: string;
  operatives: Operatives[];
}

function Home(props: Props) {
  const { title, operatives } = props;

    const [lifeArray, setLifeArray] = useState(operatives.map(op => op.life));

    const lifeArrayHandler = (index: number, newLife: number) => {
      const newLifeArray = [
          ...lifeArray.slice(0, index), 
          newLife, 
          ...lifeArray.slice(index+1)
      ];

      sessionStorage.setItem('life_array', String(newLifeArray));

      setLifeArray(newLifeArray);
    }

    useEffect(() => {
      if (sessionStorage.getItem('life_array')) {
          setLifeArray(JSON.parse("[" + sessionStorage.getItem('life_array') + "]"));
      }
    }, []);

    
    return <div>
        <Header title={title}/>

        <div className='battlescribe'>
          <DGroutes 
            lifeArray={lifeArray} 
            lifeArrayHandler={lifeArrayHandler} 
            operatives={operatives}    
          />
        </div>
        
        <br />

        <div className="summary battlescribe">
            <div className='list_header'>Selection Rules</div>
            <br />
            <p>
                <span className="bold">APx: </span>
                    Each time a friendly operative makes a shooting attack with this weapon, subtract x from the Defence of the target for that shooting attack. x is the number after the weapon's AP, e.g. AP1. If two different APx special rules would be in effect for a shooting attack, they are not cumulative - the attacker selects which one to use.
                    ()
            </p>
            <p>
                <span className="bold">Blast x: </span>
                    Each time a friendly operative performs a Shoot action and selects this weapon (or, in the case of profiles, this weapon’s profile), after making the shooting attack against the target, make a shooting attack with this weapon (using the same profile) against each other operative Visible to and within X of the original target – each of them is a valid target and cannot be in Cover. X is the distance after the weapon’s Blast, e.g. Blast . An operative cannot make a shooting attack with this weapon by performing an Overwatch action.
                    ()
            </p>
            <p>
                <span className="bold">Brutal: </span>
                    Each time a friendly operative fights in combat with this weapon, in the Resolve Successful Hits step of that combat, your opponent can only parry with critical hits.
                    ()
            </p>
            <p>
                <span className="bold">Ceaseless: </span>
                    Each time a friendly operative fights in combat or makes a shooting attack with this weapon, in the Roll Attack Dice step of that combat or shooting attack, you can re-roll any or all of your attack dice results of 1.
                    ()
            </p>
            <p>
                <span className="bold">Hot: </span>
                    Each time a friendly operative makes a shooting attack with this weapon, in the Roll Attack Dice step of that shooting attack, for each attack dice result of 1 that is discarded, that operative suffers 3 mortal wounds.
                    ()
            </p>
            <p>
                <span className="bold">Indirect: </span>
                    Each time a friendly operative makes a shooting attack with this weapon, in the select valid target step of that shooting attack, enemy operatives are not in Cover.
                    ()
            </p>
            <p>
                <span className="bold">Limited: </span>
                    This weapon can only be selected for use once per battle. If the weapon has a special rule that would allow it to make more than one shooting attack for an action (e.g. Blast), make each of those attacks as normal.
                    ()
            </p>
            <p>
                <span className="bold">Rng x: </span>
                    Each time a friendly operative makes a shooting attack with this weapon, only operatives within x are a valid target. x is the distance after the weapon's Rng, e.g. Rng ⬟. All other rules for selecting a valid target still apply.
                    ()
            </p>
        </div>
    </div>
}

export default Home;