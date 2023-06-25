import { useState, useEffect } from 'react';

import MDRoutes from '../routes/MDroutes';
import { getTable } from '../apis/AWS_API';

export default function Home() {
  const [warbands, setWarbands] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await getTable('BattleCompaniesWarbands');
      console.log("Got from server:\n", res);

      sessionStorage.setItem('warbands', JSON.stringify(res));
      setWarbands(res)
    }

    const warbands = sessionStorage.getItem('warbands');

    if (warbands) {
      console.log("Got from session storage:\n", warbands)
      setWarbands(JSON.parse(warbands));
    } else {
      loadData();
    }
  }, []);

  return <MDRoutes warbands={warbands} />
}