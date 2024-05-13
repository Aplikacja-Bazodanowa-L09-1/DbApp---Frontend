import './App.css';
import ResetPassword from './Component/ResetPassword';
import Login from './Component/Login'
import Menu from './Component/Menu'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Component/Main';
import RemindPassword from './Component/RemindPassword';
import TeamStatistic from './Component/TeamStatistic';

import Calendar from './Component/Calendar';
import CalendarPane from './Component/CalendarPane';
import NavBar from './Component/NavBar';
import NoticesPane from './Component/NoticesPane';
import ProfilePane from './Component/ProfilePane';
import StatisticsPane from './Component/StatisticsPane';
import SurveyPane from './Component/SurveyPane';

import UserView from './Component/UserView';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Menu} />
          <Route path='login/' Component={Login} />
          <Route path='reset_password/:token' Component={ResetPassword} />
          <Route path='main/' Component={Main}/>
          <Route path='remind-password/' Component={RemindPassword}/>
          <Route path='team-statistic/' Component={TeamStatistic}/>
          <Route path='user-view/' Component={UserView}/>

          <Route path='calendar/' Component={Calendar} />
          <Route path='calendarpane/' Component={CalendarPane} />
          <Route path='navbar/' Component={NavBar} />
          <Route path='noticespane/' Component={NoticesPane} />
          <Route path='profilepane/' Component={ProfilePane} />
          <Route path='statisticspane/' Component={StatisticsPane} />
          <Route path='surveypane/' Component={SurveyPane} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
