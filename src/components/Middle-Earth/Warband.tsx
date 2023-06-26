import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';

import { getWarriors } from '../../apis/AWS_API';
import { MiddleEarthOperativeType } from '../../utils/types';
import Header from '../Header';
import WarriorComponent from './WarriorComponent';
import WoundChart from './WoundChart';
import Spinner from '../Spinner';

interface Props {
  warband: string;
  username: string;
}

export default function Warband (props: Props) {
  /**
   * Properties and State
   */
  const { warband, } = props; // username will be used when backend|DB get fixed
  const [warriors, setWarriors] = useState<MiddleEarthOperativeType[] | null>(null);
  const [showWarriorByIndex, setShowWarriorByIndex] = useState<number>();

  /**
   * Handlers
   */
  const setShowWarriorHandler = (newIndex: number) => {
    const index = newIndex === showWarriorByIndex ? -1 : newIndex;
    setShowWarriorByIndex(index);
  }
  
  /**
   * Elements from component
   */
  const renderedWarband = warriors === null?
    <Spinner message='' />
  :
    warriors.map((warrior, index) => {
      return <div
        key={warrior.name}
        className='warrior-div' 
        onClick={() => setShowWarriorHandler(index)}> {/* event handler must be moved */}
          {
            index === showWarriorByIndex?
              <WarriorComponent warrior={warrior} />
            :  
              <div className='closed-sheet'>{warrior.name}</div>
          }
        </div>
    })

  /**
   * Use Effect
   */
  useEffect(() => {
    const loadData = async () => {
      const res = await getWarriors(warband);
      console.log("Got from server:\n", res);

      sessionStorage.setItem('warriors_' + warband, JSON.stringify(res));
      setWarriors(res)
    }

    const warriors = sessionStorage.getItem('warriors_' + warband);

    if (warriors) {
      console.log("Got from session storage:\n", warriors)
      setWarriors(JSON.parse(warriors));
    } else {
      loadData();
    }
  }, [warband]);

  /**
   * Function return
   */
  return <div>
    <Header title={warband} color={'rgb(106,130,168)'} />

    <div className='battlescribe'>
      <div className='list_row return'>
        <Link to='/MiddleEarth'><SlArrowLeftCircle className='react-icons' /></Link>
      </div>

      {renderedWarband}

      <WoundChart />
    </div>
  </div>
}