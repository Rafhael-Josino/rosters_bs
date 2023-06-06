import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';
import { MiddleEarthOperativeType } from '../../utils/types';
import WarriorComponent from './WarriorComponent';

interface Props {
  warriors: MiddleEarthOperativeType[]
}

export default function Warband (props: Props) {
  const { warriors } = props;
  
  const renderedWarband = warriors.map(warrior => {
    return <WarriorComponent
      warrior={warrior}
    />
  });

  return <div>
    <div className='list_row return'>
      <Link to='/MiddleEarth'><SlArrowLeftCircle className='react-icons' /></Link>
    </div>

    {renderedWarband}
  </div>
}