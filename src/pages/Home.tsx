import { Link } from 'react-router-dom';
// import { GiRadioactive } from 'react-icons/gi';
// import { FaRing } from 'react-icons/fa';
import Header from '../components/Header';

function Home() {
  return <div>
    <Header title='Custom Kill Teams' />

    <div className='rosters_list'>
      <Link
        state={{ 'align-itens': 'center' }} 
        to="Death Guard"
      >
        Death Guard
      </Link>
    </div>

    <div className='rosters_list'>
      <Link
        state={{ 'align-itens': 'center' }} 
        to="Iron Warriors"
      >
        Iron Warriors
      </Link>
    </div>

    {/* <div className='rosters_list' style={{'backgroundColor': 'yellowgreen'}}>
      <Link
        state={{ 'align-itens': 'center' }} 
        to="MiddleEarth">Middle Earth <FaRing /></Link>
    </div>

    <div className='rosters_list' style={
      {
        'backgroundColor': 'yellowgreen',
        'color': 'purple'
      }
    }>
      Mordheim (em implementação)
    </div> */}

    <div className='footnote'>
        Uses format from: <a href="https://www.battlescribe.net">BattleScribe</a>
    </div>
  </div>
}

export default Home;