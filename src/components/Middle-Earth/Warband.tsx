import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';
import { MiddleEarthWarbandType } from '../../utils/types';
import Header from '../Header';
import WarriorComponent from './WarriorComponent';
import WoundChart from './WoundChart';

interface Props {
  warband: MiddleEarthWarbandType;
}

export default function Warband (props: Props) {
  const { warband } = props;
  const [showWarrior, setShowWarrior] = useState<number>();

  const setShowWarriorHandler = (index: number) => setShowWarrior(index);
  
  const renderedWarband = warband.warriors.map((warrior, index) => {
    return <div
      className='warrior-div' 
      onClick={() => setShowWarriorHandler(index)}>
        {
          index === showWarrior?
            <WarriorComponent warrior={warrior} />
          :  
            <div className='closed-sheet'>{warrior.name}</div>
        }
      </div>
  });

  return <div>
    <Header title={warband.name} color={'rgb(106,130,168)'} />

    <div className='battlescribe'>
      <div className='list_row return'>
        <Link to='/MiddleEarth'><SlArrowLeftCircle className='react-icons' /></Link>
      </div>

      {renderedWarband}

      <WoundChart />
    </div>
  </div>
}