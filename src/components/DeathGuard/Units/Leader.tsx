import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';

function Leader() {
    return <div>
         <div className='list_row return'>
            <Link to='/DeathGuard/'><SlArrowLeftCircle className='react-icons' /></Link>
        </div>
        <div className="rootselection">
            <h4>Plague Marine Champion</h4>
            <p>
                <span className="bold">Selections:</span> Plasma pistol, Power fist
            </p>
            <p className="category-names">
                <span className="bold">Categories:</span> <span className="caps">DEATH GUARD, Chaos, Bubonic Astartes, Plague Marine, Champion, Leader</span>
            </p>
            <p className="rule-names">
                <span className="bold">Rules:</span> <span className="italic">APx, Brutal, Hot, Rng x</span>
            </p>
            <p className="profile-names">
                <span className="bold">Abilities:</span> <span className="italic">Disgustingly Resilient</span>, <span className="bold">Operative:</span> <span className="italic">Plague Marine Champion</span>, <span className="bold">Weapons:</span> <span className="italic">⌖ Plasma pistol - Standard, ⌖ Plasma pistol - Supercharge, ⚔ Power fist</span>
            </p>
            <br />
            <table cellSpacing="-1">
                <tbody><tr>
                    <th>Abilities</th>
                    <th>Ability</th>
                    <th>Ref</th>
                </tr>
                <tr>
                    <td className="profile-name">Disgustingly Resilient</td>
                    <td>Each time this operative would lose a wound, roll one D6: on a 5+, that would is not lost. This operative cannot be injured.</td>
                    <td>
                    </td>
                </tr>
            </tbody></table>
            <table cellSpacing="-1">
                <tbody><tr>
                    <th>Operative</th>
                    <th>M</th><th>APL</th><th>GA</th><th>DF</th><th>SV</th><th>W</th>
                    <th>Ref</th>
                </tr>
                <tr>
                    <td className="profile-name">Plague Marine Champion</td>
                    <td>2⬤</td><td>3</td><td>1</td><td>3</td><td>3+</td><td>13</td>
                    <td>
                    </td>
                </tr>
            </tbody></table>
            <table cellSpacing="-1">
                <tbody><tr>
                    <th>Weapons</th>
                    <th>A</th><th>WS/BS</th><th>D</th><th>SR</th><th>!</th>
                    <th>Ref</th>
                </tr>
                <tr>
                    <td className="profile-name">⌖ Plasma pistol - Standard</td>
                    <td>4</td><td>2+</td><td>5/6</td><td>Rng ⬟, AP1</td><td>-</td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td className="profile-name">⌖ Plasma pistol - Supercharge</td>
                    <td>4</td><td>2+</td><td>5/6</td><td>Rng ⬟, AP2, Hot</td><td>-</td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td className="profile-name">⚔ Power fist</td>
                    <td>5</td><td>3+</td><td>5/7</td><td>Brutal</td><td>-</td>
                    <td>
                    </td>
                </tr>
            </tbody></table>
      </div>
    </div>
}

export default Leader;