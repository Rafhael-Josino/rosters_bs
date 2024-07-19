import { Link } from 'react-router-dom';
import { SlArrowLeftCircle } from 'react-icons/sl';
import DGroutes from '../DG/DGroutes';

type Props = {
  title: string;
  lifeArray: number[],
  lifeArrayHandler: (index: number, newLife: number) => void;
  operatives: { name: string, life: number}[];
}

function Routes (props: Props) {
  const { title, lifeArray, lifeArrayHandler, operatives} = props;

  switch (title) {
    case "Death Guard": {
      return <DGroutes 
        lifeArray={lifeArray} 
        lifeArrayHandler={lifeArrayHandler} 
        operatives={operatives}    
      />
    }
    default: {
      return <div>
        <div className='list_row return'>
            <Link to='/'><SlArrowLeftCircle className='react-icons' /></Link>
        </div>
        <span>Not Ready</span>
      </div>
    }
  }
}

export default Routes;