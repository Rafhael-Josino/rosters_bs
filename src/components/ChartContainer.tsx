// import { Link } from 'react-router-dom';
// import { SlArrowLeftCircle } from 'react-icons/sl';
import Header from './Header';
// import WoundChart from './Middle-Earth/WoundChart';
import WoundChart from './OldWorld/WoundChart';
import HitChart from './OldWorld/HitChart';

export default function ChartContainer() {
  return <div>
    <Header title='Old World Charts' />

    <div className='battlescribe'>
      {/* <div className='list_row return'>
        <Link to='/'><SlArrowLeftCircle className='react-icons' /></Link>
      </div> */}

      <HitChart />
      <p/>
      <WoundChart />
    </div>
  </div>
}