import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';
import { GiGoblinHead } from 'react-icons/gi';
import { MiddleEarthWarbandType } from '../../utils/types';

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
        <GiGoblinHead /> 
        <span>{warband.name}</span>
        <GiGoblinHead />
      </div>
    </Link>
  });

  return <div>
    <div className='list_row return'>
      <Link to='/'><SlArrowLeftCircle className='react-icons' /></Link>
    </div>

    {renderedWarbandTitles}
  </div>
}