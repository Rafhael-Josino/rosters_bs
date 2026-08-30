import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';
import Header from '../Header';
// import WoundChart from './Middle-Earth/WoundChart';
import WoundChart from './WoundChart';
import HitChart from './HitChart';

export default function OWChartContainer() {
  return <div className='old-world'>
    <Header title='Old World Charts' />

  <div className='battlescribe'>
      <div className='list_row return'> 
        <Link to='/'><SlArrowLeftCircle className='react-icons' /></Link>
      </div>

      <HitChart />
      <p/>
      <WoundChart />
      <p/>
    </div>
  </div>
}