import { useState, useEffect } from 'react';

import MDRoutes from '../routes/MDroutes';
import { getTable } from '../apis/AWS_API';
import Spinner from '../components/Spinner';

export default function Home() {
  /**
   * State
   */
  const [warbands, setWarbands] = useState(null);

  /**
   * Use Effect
   */
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

  /**
   * Component returned
   */
  return <>
    {
      warbands?
        <MDRoutes warbands={warbands} />
      :
        <div className='spinner-container'>
          <Spinner message=''/>
        </div>
    }
  </>
}