import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';
import Header from '../Header';
// import WoundChart from './Middle-Earth/WoundChart';
import WoundChart from './WoundChart';

export default function MEChartContainer() {
  return <div className='old-world'>
    <Header title='MESBG Wound Chart' />

    <div className='battlescribe'>
      <div className='list_row return'> 
        <Link to='/'><SlArrowLeftCircle className='react-icons' /></Link>
      </div>

      <WoundChart />
      <p/>
    </div>
  </div>
}