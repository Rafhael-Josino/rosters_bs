import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';
import Header from './Header';
import WoundChart from './Middle-Earth/WoundChart';

export default function ChartContainer() {
  return <div>
    <Header title='Battle Company' />

    <div className='battlescribe'>
      <div className='list_row return'>
        <Link to='/'><SlArrowLeftCircle className='react-icons' /></Link>
      </div>

      <WoundChart />
    </div>
  </div>
}