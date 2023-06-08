import { Routes, Route } from 'react-router-dom';
import { MiddleEarthWarbandType } from '../utils/types';
import Warband from '../components/Middle-Earth/Warband';
import WarbandsList from '../components/Middle-Earth/WarbandsList';

interface Props {
  warbands: MiddleEarthWarbandType[]
}

export default function routes(props: Props) {
  const { warbands } = props;

  const renderedRoutes = warbands.map(warband => {
    return <Route
      path={`/${warband.name}`}
      element={<Warband warband={warband} />}
    />
  });
  
  return <Routes>
    <Route 
      path='/' 
      element={<WarbandsList warbands={warbands} />} 
    />
    
    {renderedRoutes}
  </Routes>
}
