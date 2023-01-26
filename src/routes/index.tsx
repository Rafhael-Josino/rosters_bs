import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DGHome from '../components/DG/DGHome';

function routes() {
    return <Routes>
        <Route path='/*' element={<Home />}></Route>
        <Route path='/DeathGuard/*' element={<DGHome />}></Route>
    </Routes>
}

export default routes