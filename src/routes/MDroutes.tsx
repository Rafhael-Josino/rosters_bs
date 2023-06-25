import { Routes, Route } from 'react-router-dom';
import { BattleCompaniesWarbandType } from '../utils/types';
import Warband from '../components/Middle-Earth/Warband';
import WarbandsList from '../components/Middle-Earth/WarbandsList';

interface Props {
  warbands: BattleCompaniesWarbandType[] //fix type
}

export default function routes(props: Props) {
  const { warbands } = props;

  // const renderedRoutes = warbands.map(warband => {
  const renderedRoutes = warbands.map(warband => {
    return <Route
      key={warband.id}
      path={`/${warband.id}`}
      element={<Warband warband={warband.id} username={warband.username} />}
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
