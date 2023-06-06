// import { useState } from 'react';
import { GiGoblinHead } from 'react-icons/gi';
import Header from '../components/Header';
import MDRoutes from '../routes/MDroutes';

import TempData from '../tmp/warbands';

export default function Home() {

  // use effect -> load information from user

  const renderedWarbandTitles = TempData.map(warband => {
    return <div 
      className='warband-title' 
      style={{ 'backgroundColor': 'rgb(106,130,168)' }}
    >
      <GiGoblinHead /> 
      <span>{warband.name}</span>
      <GiGoblinHead />
    </div>
  });

  return <div>
    <Header title='Battle Company Rosters' />

    <div className='battlescribe'>
      <MDRoutes warbands={TempData} />
    </div>
  </div>
}