import './App.css';
import ResetPassword from './Component/BeforeLogin/ResetPassword.js';
import Login from './Component/BeforeLogin/Login.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Component/FrontViewPagesPlayer/Main';
import RemindPassword from './Component/BeforeLogin/RemindPassword.js';
import TeamStatistic from './Component/FrontViewPagesPlayer/TeamStatistic';
import RegistrationForm from './Component/BeforeLogin/RegistrationForm.js';
import CreatingTeam from './Component/Admin/CreatingTeam.js';
import Calendar from './Component/Main/Calendar';
import CalendarPane from './Component/Main/CalendarPane.js';
import NavBar from './Component/NavBar';
import NoticesPane from './Component/Main/NoticesPane';
import ProfilePane from './Component/Main/ProfilePane';
import StatisticsPane from './Component/Main/StatisticsPane';
import SurveyPane from './Component/Main/SurveyPane';

import UserView from './Component/FrontViewPagesPlayer/UserView';
import EquipmentView from './Component/FrontViewPagesPlayer/EquipmentView'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='reset_password/:token' Component={ResetPassword} />
          <Route path='main/' Component={Main}/>
          <Route path='remind-password/' Component={RemindPassword}/>
          <Route path='team-statistic/' Component={TeamStatistic}/>
          <Route path='user-view/' Component={UserView}/>
          <Route path='equipment-view/' Component={EquipmentView}/>
          <Route path='registrationform/' Component={RegistrationForm}/>
          <Route path='calendar/' Component={Calendar} />
          <Route path='calendarpane/' Component={CalendarPane} />
          <Route path='navbar/' Component={NavBar} />
          <Route path='noticespane/' Component={NoticesPane} />
          <Route path='profilepane/' Component={ProfilePane} />
          <Route path='statisticspane/' Component={StatisticsPane} />
          <Route path='surveypane/' Component={SurveyPane} />
          <Route path='createteam/' Component={CreatingTeam}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
