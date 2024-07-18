import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';

function Leader() {
    return <div>
         <div className='list_row return'>
            <Link to='/DeathGuard/'><SlArrowLeftCircle className='react-icons' /></Link>
        </div>
        <div className="rootselection">
            <h4>Lord of Contagion</h4>
            <p>
                <span className="bold">Selections:</span> Plague Axe
            </p>
            <p className="category-names">
                <span className="bold">Categories:</span> <span className="caps">DEATH GUARD, Chaos, Bubonic Astartes, Plague Marine, Terminator, Leader</span>
            </p>
            <p className="rule-names">
                <span className="bold">Rules:</span> <span className="italic">Brutal, Reap x, Rending, Brutal, Ceaseless</span>
            </p>
            <p className="profile-names">
                <span className="bold">Abilities:</span> <span className="italic">Disgustingly Resilient</span>, <span className="bold">Operative:</span> <span className="italic">Plague Marine Champion</span>, <span className="bold">Weapons:</span> <span className="italic">⚔ Plague Axe</span>
            </p>
            <br />
            <table cellSpacing="-1">
              <tbody>
                <tr>
                  <th>Abilities</th><th>Ability</th>
                </tr>
                <tr>
                  <td className="profile-name">Disgustingly Resilient</td>
                  <td>Each time this operative would lose a wound, roll one D6: on a 6+, that would is not lost. This operative cannot be injured.</td>
                </tr>
                <tr>
                  <td className="profile-name">Terminator Armor</td>
                  <td>This operative has an Invulnarable Save of 5+ and cannot perform the Dash action in his activation, unless by the effect of other ability.</td>
                </tr>
                <tr>
                  <td className="profile-name">Deep Strike (2AP)</td>
                  <td>This operative does not need to be deployed in the game start...</td>
                </tr>
              </tbody>
            </table>
            <table cellSpacing="-1">
              <tbody>
                <tr>
                  <th>Operative</th><th>M</th><th>APL</th><th>GA</th><th>DF</th><th>SV</th><th>W</th>
                </tr>
                <tr>
                  <td className="profile-name">Plague Marine Champion</td>
                  <td>2⬤</td><td>3</td><td>1</td><td>3</td><td>3+/5++</td><td>18</td>
                </tr>
              </tbody>
            </table>
            <table cellSpacing="-1">
              <tbody>
                <tr>
                  <th>Weapons</th><th>A</th><th>WS/BS</th><th>D</th><th>SR</th><th>!</th>
                </tr>
                <tr>
                  <td className="profile-name">⚔ Plague Axe</td>
                  <td>5</td><td>3+</td><td>5/6</td><td>Brutal, Ceaseless</td><td>Reap 1, Rending</td>
                </tr>
              </tbody>
            </table>
      </div>
    </div>
}

export default Leader;