import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';
import { GiDeathSkull } from 'react-icons/gi';
import { GiHealthNormal } from 'react-icons/gi';
import { GiSpikyExplosion } from 'react-icons/gi';

type Props = {
    title: string,
    lifeArray: number[],
    lifeArrayHandler: (index: number, newLife: number) => void,
    operatives: { name: string, life: number}[]
}

function UnitsList(props: Props) {
    const { title, lifeArray, lifeArrayHandler, operatives } = props;

    const woundHandler = (index: number, newLife: number, maxLife: number) => {
        if (newLife >=0 && newLife <= maxLife) lifeArrayHandler(index, newLife);
    }

    const renderedOperatives = operatives.map((op, index) => {
        // General edits
        let status: JSX.Element = <span></span>;
        let status_css: string = '';

        if (!lifeArray[index]) {
            status = <GiDeathSkull />;
            status_css = 'down';
        } 
        // Not valid for death guard (it does not get injured)
        /*
        else if(lifeArray[index] <= op.life / 2) {
            status = ' (injured)';
            nameStyle = { 'color': 'orange' };
        }
        */

       // Operatives specific customizations:
       // Icon Bearer

        return <div className='list_row' key={index}>
            <div className='unit deathguard_unit'>
                <Link className={status_css} to={`/${title}/${op.name}`}>{op.name}{status}</Link>
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
            <div>Operatives</div>
            <div>Life</div>
        </div>
        {renderedOperatives}
    </div>
}

export default UnitsList