import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';

function WarriorBlight() {
    return <div>
        <div className='list_row return'>
            <Link to='/DeathGuard/'><SlArrowLeftCircle className='react-icons' /></Link>
        </div>
        <div className="rootselection">
            <h4>Plague Marine (Warrior) [3 EP]</h4>
            <p>
                <span className="bold">Selections:</span> Blight Grenade [2 EP], Boltgun, Plague knife, Virulent Rounds [1 EP]
            </p>
            <p className="category-names">
                <span className="bold">Categories:</span> <span className="caps">DEATH GUARD, Chaos, Bubonic Astartes, Plague Marine, Warrior, Operative</span>
            </p>
            <p className="rule-names">
                <span className="bold">Rules:</span> <span className="italic">Blast x, Ceaseless, Indirect, Limited, Rng x</span>
            </p>
            <p className="profile-names">
                <span className="bold">Abilities:</span> <span className="italic">Disgustingly Resilient</span>, <span className="bold">Equipment:</span> <span className="italic">Virulent Rounds</span>, <span className="bold">Operative:</span> <span className="italic">Plague Marine</span>, <span className="bold">Weapons:</span> <span className="italic">⌖ Blight grenade, ⌖ Boltgun, ⚔ Plague knife</span>
            </p>
            <br/>
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
                    <th>Equipment</th>
                    <th>Equipment</th>
                    <th>Ref</th>
                </tr>
                <tr>
                    <td className="profile-name">Virulent Rounds</td>
                    <td>Select one boltgun or bolt pistol the operative is equipped with. Add 1 to that weapon's Critical Damage characteristic for the battle.</td>
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
                    <td className="profile-name">Plague Marine</td>
                    <td>2⬤</td><td>3</td><td>1</td><td>3</td><td>3+</td><td>12</td>
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
                    <td className="profile-name">⌖ Blight grenade</td>
                    <td>4</td><td>3+</td><td>2/3</td><td>Rng ⬟, Blast ⬤, Limited, Indirect, Ceaseless</td><td>-</td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td className="profile-name">⌖ Boltgun</td>
                    <td>4</td><td>3+</td><td>3/4</td><td>-</td><td>-</td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td className="profile-name">⚔ Plague knife</td>
                    <td>3</td><td>3+</td><td>3/5</td><td>-</td><td>-</td>
                    <td>
                    </td>
                </tr>
            </tbody></table>
        </div>
    </div>
}

export default WarriorBlight;