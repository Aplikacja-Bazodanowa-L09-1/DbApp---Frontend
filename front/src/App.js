import './App.css';
import ResetPassword from './Component/ResetPassword';
import Login from './Component/Login'
import Menu from './Component/Menu'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Component/Main';
import RemindPassword from './Component/RemindPassword';

import Calendar from './Component/Calendar';
import TeamStatistic from './Component/TeamStatistic';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path='calendar/' Component={Calendar} />
          <Route path='teamstatistic/' Component={TeamStatistic} />

          <Route path='/' Component={Menu} />
          <Route path='login/' Component={Login} />
          <Route path='reset_password/:token' Component={ResetPassword} />
          <Route path='main/' Component={Main}/>
          <Route path='remind-password/' Component={RemindPassword}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
