import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';

function Obliterator() {
    return <div>
        <div className='list_row return'>
            <Link to='/Iron Warriors/'><SlArrowLeftCircle className='react-icons' /></Link>
        </div>

        <div className="rootselection">
          <div className='faction_header'>Obliterator</div>
          <p className="category-names">
            <span className="bold">Categories:</span> <span className="caps">IRON WARRIORS, Chaos, Heretic Astartes, Nightmare Hulk</span>
          </p>
          <br/>

          {/* Abilities Table */}
          <table cellSpacing="-1">
            <tbody>
              <tr className='table-header'>
                <th>Abilities</th><th>Ability</th>
              </tr>
              <tr>
                <td className="profile-name">Nightmare Hulk</td>
                <td>
                  Light terrain and operatives with a Wounds characteristic of 15 or less do not provide Cover for this operative.
                </td>
              </tr>
              <tr>
                <td className="profile-name">Chaotic Engineering*</td>
                <td>
                  <div>
                    When performing a shooting attack with this weapon, before the dice roll step, roll a D6 and according to the table below add the special rule for this attack.
                  </div>
                  <div className='chaotic_engineering'>
                    <table cellSpacing="-1" className='chaotic_engineering'>
                      <tr>
                        <td className='td-header'>01</td><td>Lethal 5+</td>
                      </tr>
                      <tr>
                        <td className='td-header'>02</td><td>Blast ⬤</td>
                      </tr>
                      <tr>
                        <td className='td-header'>03</td><td>Relentless</td>
                      </tr>
                      <tr>
                        <td className='td-header'>04</td><td>Torrent</td>
                      </tr>
                      <tr>
                        <td className='td-header'>05</td><td>AP2</td>
                      </tr>
                      <tr>
                        <td className='td-header'>06</td><td>Brutal</td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="profile-name">Breach</td>
                <td>
                  Each time this operative performs a Normal Move, Dash or Charge action, it can move thrugh parts of terrain features that are no more than 🔺thick as if they were not there
                </td>
              </tr>
            </tbody>
          </table>

          {/* /Operative Table  */}
          <table cellSpacing="-1">
            <tbody>
              <tr className='table-header'>
                <th>Operative</th><th>M</th><th>APL</th><th>GA</th><th>DF</th><th>SV</th><th>W</th>
              </tr>
              <tr>
                <td className="profile-name">Obliterator</td>
                <td>2⬤</td><td>3</td><td>1</td><td>3</td><td>3+</td><td>18</td>
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
                    <td className="profile-name">⌖ Fleshmetal Guns</td>
                    <td>4</td><td>3+</td><td>4/5</td><td>Chaotic Engineering*</td><td>-</td>
                </tr>
                <tr>
                    <td className="profile-name">⚔ Crushing Fists</td>
                    <td>5</td><td>3+</td><td>5/7</td><td>Brutal</td><td>-</td>
                </tr>
              </tbody>
            </table>
      </div>
    </div>
}

export default Obliterator;