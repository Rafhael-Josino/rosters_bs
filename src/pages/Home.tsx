import { Link } from 'react-router-dom';
import { HiOutlineBeaker } from 'react-icons/hi';
import Header from '../components/Header';

function Home() {
    return <div>
        <Header />
        <div className='battlescribe rosters_list'>
            <div className='deathguard_roster'>
                <Link to="DeathGuard">Death Guard <HiOutlineBeaker /></Link>
            </div>
        </div>
        <div className='footnote'>
            Uses lists created with: <a href="https://www.battlescribe.net">BattleScribe</a>
        </div>
    </div>
}

export default Home;