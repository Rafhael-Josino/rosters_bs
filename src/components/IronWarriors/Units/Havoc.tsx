import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';

function Havoc() {
    return <div>
        <div className='list_row return'>
            <Link to='/Iron Warriors/'><SlArrowLeftCircle className='react-icons' /></Link>
        </div>

        <div className="rootselection">
          <div className='faction_header'>Havoc</div>
          <p className="category-names">
            <span className="bold">Categories:</span> <span className="caps">IRON WARRIORS, Chaos, Heretic Astartes</span>
          </p>
          <br/>

          {/* /Operative Table  */}
          <table cellSpacing="-1">
            <tbody>
              <tr className='table-header'>
                <th>Operative</th><th>M</th><th>APL</th><th>GA</th><th>DF</th><th>SV</th><th>W</th>
              </tr>
              <tr>
                <td className="profile-name">Havoc</td>
                <td>3⬤</td><td>3</td><td>1</td><td>3</td><td>3+</td><td>12</td>
              </tr>
            </tbody>
          </table>

          {/* Weapons Table */}
            <table cellSpacing="-1">
              <tbody>
                <tr className='table-header'>
                  <th>Weapons</th><th>A</th><th>WS/BS</th><th>D</th><th>SR</th><th>!</th>
                </tr>
                <tr>
                    <td className="profile-name">⌖ Heavy Bolter</td>
                    <td>5</td><td>3+</td><td>4/5</td><td>Heavy, Fusillade</td><td>P1</td>
                </tr>
                <tr>
                    <td className="profile-name">⌖ Reaper Chaincannon</td>
                    <td>6</td><td>3+</td><td>3/5</td><td>Ceaseless, Fusillade, Heavy</td><td>-</td>
                </tr>
                <tr>
                    <td className="profile-name">⌖ Heavy Flamer</td>
                    <td>5</td><td>2+</td><td>2/3</td><td>Range ⬟, Torrent, Ceaseless, Heavy</td><td>P1</td>
                </tr>
                <tr>
                    <td className="profile-name">⌖ Lascannon</td>
                    <td>4</td><td>3+</td><td>6/7</td><td>Range ⬟, AP2, Heavy, Unwieldy</td><td>-</td>
                </tr>
                <tr>
                    <td className="profile-name">⌖ Missile Launcher - Frag</td>
                    <td>4</td><td>3+</td><td>5/6</td><td>Blast ⬤, Heavy</td><td>-</td>
                </tr>
                <tr>
                    <td className="profile-name">⌖ Missile Launcher - Krak</td>
                    <td>4</td><td>3+</td><td>5/7</td><td>AP1, Heavy</td><td>-</td>
                </tr>
                <tr>
                    <td className="profile-name">⚔ Fists</td>
                    <td>4</td><td>3+</td><td>3/4</td><td>-</td><td>-</td>
                </tr>
              </tbody>
            </table>
      </div>
    </div>
}

export default Havoc;