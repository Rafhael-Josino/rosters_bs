import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';
import { GiSpikedDragonHead } from 'react-icons/gi';
import Header from '../Header';
import { BattleCompaniesWarbandType } from '../../utils/types';
import WoundChart from './WoundChart';

interface Props {
  warbands: BattleCompaniesWarbandType[]; // fix type
}

export default function WarbandsList(props: Props) {
  const { warbands } = props;
  const allowWarbands = true;
 
  const renderedWarbandTitles = warbands.map(warband => {
    return <Link to={`/MiddleEarth/${warband.id}`} key={warband.id}>
        <div 
          className='warband-title' 
          style={{ 'backgroundColor': 'rgb(106,130,168)' }}
          >
          <GiSpikedDragonHead /> 
          <span>{warband.id}</span>
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

      {
        allowWarbands?
          <div>
            Warbands:

            {renderedWarbandTitles}
          </div>
        :
          null
      }

      <WoundChart />
    </div>
  </div>
}