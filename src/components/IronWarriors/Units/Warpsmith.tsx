import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';

function Warpsmith() {
    return <div>
        <div className='list_row return'>
            <Link to='/Iron Warriors/'><SlArrowLeftCircle className='react-icons' /></Link>
        </div>

        <div className="rootselection">
          <div className='faction_header'>Warpsmith</div>
          <p className="category-names">
              <span className="bold">Categories:</span> <span className="caps">IRON WARRIORS, Chaos, Heretic Astartes, Leader</span>
          </p>
          <br/>

          {/* Abilities Table */}
          <table cellSpacing="-1">
            <tbody>
              <tr className='table-header'>
                <th>Abilities</th><th>Ability</th>
              </tr>
              <tr>
                <td className="profile-name">Parry Hook*</td>
                <td>
                  Each time a friendly operative fights in combat with this weapon, in the Resolve Successful Hits step of that combat, each time you parry with a normal hit, you can select one of your opponent's critical hits to be discarded instead.
                </td>
              </tr>
              <tr>
                <td className="profile-name">Mechadentrite</td>
                <td>
                  Once per Turning Point, during this operative's activation, it can perform the Pick Up action or a mission action for one less AP (to a minimum of 0AP).
                </td>
              </tr>
              <tr>
                <td className="profile-name">Manifest Psychic Power (1AP)</td>
                <td>
                Resolve a Iron Warriors psychic power as specified here. This operative cannot perform this action while within Engagement Range of an enemy operative.
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
                <td className="profile-name">Warpsmith</td>
                <td>3⬤</td><td>3</td><td>1</td><td>3</td><td>3+</td><td>13</td>
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
                    <td className="profile-name">⌖ Plasma gun - Standard</td>
                    <td>4</td><td>3+</td><td>5/6</td><td>AP1</td><td>-</td>
                </tr>
                <tr>
                    <td className="profile-name">⌖ Plasma gun - Supercharge</td>
                    <td>4</td><td>3+</td><td>5/6</td><td>AP2, Hot</td><td>-</td>
                </tr>
                <tr>
                    <td className="profile-name">⌖ Tainted Bolt Pistol</td>
                    <td>4</td><td>2+</td><td>3/4</td><td>Range ⬟, Balanced</td><td>-</td>
                </tr>
                <tr>
                    <td className="profile-name">⚔ Power Fist</td>
                    <td>4</td><td>3+</td><td>5/7</td><td>Brutal</td><td>-</td>
                </tr>
                <tr>
                    <td className="profile-name">⚔ Power Maul</td>
                    <td>5</td><td>2+</td><td>4/6</td><td>-</td><td>Stun</td>
                </tr>
                <tr>
                    <td className="profile-name">⚔ Power Weapon</td>
                    <td>5</td><td>2+</td><td>4/6</td><td>Lethal 5+</td><td>-</td>
                </tr>
                <tr>
                    <td className="profile-name">⚔ Tainted Chainsword</td>
                    <td>5</td><td>2+</td><td>4/5</td><td>Parry Hook*</td><td>-</td>
                </tr>
              </tbody>
            </table>
      </div>
    </div>
}

export default Warpsmith;