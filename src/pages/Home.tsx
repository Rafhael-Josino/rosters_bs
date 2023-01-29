import { Link } from 'react-router-dom';
import { GiRadioactive } from 'react-icons/gi';
import Header from '../components/Header';

function Home() {
    return <div>
        <Header />
        <div className='rosters_list'>
            <div className='deathguard_roster'>
                <Link to="DeathGuard">Death Guard <GiRadioactive /></Link>
            </div>
        </div>
        <div className='footnote'>
            Uses lists created with: <a href="https://www.battlescribe.net">BattleScribe</a>
        </div>
    </div>
}

export default Home;