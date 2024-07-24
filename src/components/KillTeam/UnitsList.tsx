import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';
import { GiDeathSkull } from 'react-icons/gi';
import { GiHealthNormal } from 'react-icons/gi';
import { GiSpikyExplosion } from 'react-icons/gi';

type Props = {
    title: string,
    lifeArray: number[],
    lifeArrayHandler: (index: number, newLife: number) => void,
    operatives: { name: string, life: number}[],
    injuryImmunity: boolean,
}

function UnitsList(props: Props) {
    const { title, lifeArray, lifeArrayHandler, operatives, injuryImmunity } = props;

    const woundHandler = (index: number, newLife: number, maxLife: number) => {
        if (newLife >=0 && newLife <= maxLife) lifeArrayHandler(index, newLife);
    }

    const renderedOperatives = operatives.map((op, index) => {
        let status: JSX.Element = <span></span>;
        let color: string = 'white';

        if (!lifeArray[index]) {
            status = <GiDeathSkull />;
            color = 'red';
            // status_css = 'down';
        } 
        else if ((lifeArray[index] <= op.life / 2) && !injuryImmunity) {
            status = <span>(injured)</span>;
            color = 'orange';
        }
        
        return <div className='list_row' key={index}>
            <div className='unit deathguard_unit'>
                <Link style={{ 'color': color }} to={`/${title}/${op.name}`}>
                  {op.name}{status}
                </Link>
            </div>
            <div>
                {lifeArray[index]} / {op.life}--

                <button 
                    className='damage'
                    onClick={() => woundHandler(index, lifeArray[index]-1, op.life)}
                >
                    <GiSpikyExplosion />
                </button>
                <span>{" | "}</span>
                <button 
                    className='damage'
                    onClick={() => woundHandler(index, lifeArray[index]+1, op.life)}
                >
                    <GiHealthNormal />
                </button>
            </div>
        </div>


    });

    return <div className='unitList'>
        <div className='list_row return'>
            <Link to='/'><SlArrowLeftCircle className='react-icons' /></Link>
        </div>
        <div className='list_row list_header'>
          <div>OPERATIVES</div>
          <div>LIFE</div>
        </div>
        {renderedOperatives}
    </div>
}

export default UnitsList