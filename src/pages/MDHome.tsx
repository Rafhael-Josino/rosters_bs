// import { useState } from 'react';
import MDRoutes from '../routes/MDroutes';

import TempData from '../tmp/warbands';

export default function Home() {

  // use effect -> load information from user

  return <MDRoutes warbands={TempData} />
}