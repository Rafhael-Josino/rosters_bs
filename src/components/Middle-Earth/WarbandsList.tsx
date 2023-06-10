import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';
import { GiSpikedDragonHead } from 'react-icons/gi';
import Header from '../Header';
import { MiddleEarthWarbandType } from '../../utils/types';
import WoundChart from './WoundChart';

interface Props {
  warbands: MiddleEarthWarbandType[]
}

export default function WarbandsList(props: Props) {
  const { warbands } = props;
 
  const renderedWarbandTitles = warbands.map(warband => {
    return <Link to={`/MiddleEarth/${warband.name}`}>
        <div 
          className='warband-title' 
          style={{ 'backgroundColor': 'rgb(106,130,168)' }}
          >
          <GiSpikedDragonHead /> 
          <span>{warband.name}</span>
          <GiSpikedDragonHead />
        </div>
    </Link>
  });

  return <div>
    <Header title='Battle Company' />

    <div className='battlescribe'>
      <div className='list_row return'>
        <Link to='/'><SlArrowLeftCircle className='react-icons' /></Link>
      </div>

      Warbands:

      {renderedWarbandTitles}

      <WoundChart />
    </div>
  </div>
}