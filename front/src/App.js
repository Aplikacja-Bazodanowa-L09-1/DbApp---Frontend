import './App.css';
import ResetPassword from './Component/BeforeLogin/ResetPassword.js';
import Login from './Component/BeforeLogin/Login.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Component/FrontViewPagesPlayer/Main';
import RemindPassword from './Component/BeforeLogin/RemindPassword.js';
import TeamStatistic from './Component/FrontViewPagesPlayer/TeamStatistic';
import RegistrationForm from './Component/BeforeLogin/RegistrationForm.js';
import CreatingTeam from './Component/Admin/CreatingTeam.js';
import ManageTeam from './Component/CoachView/ManageTeam.js';
import RegistrationCouch from './Component/CoachView/Registration/RegistrationCouch.js';
import TeamInformationCouch from './Component/CoachView/TeamStatisticCouch/TeamInformationCouch.js';
import TeamStatisticCouch from './Component/CoachView/TeamStatisticCouch/TeamStatisticCouch.js';
import Calendar from './Component/Main/Calendar';
import CalendarComponent from './Component/Main/CalendarComponent';
import CalendarPane from './Component/Main/CalendarPane.js';
import NavBar from './Component/NavBar';
import NoticesPane from './Component/Main/NoticesPane';
import ProfilePane from './Component/Main/ProfilePane';
import StatisticsPane from './Component/Main/StatisticsPane';
import SurveyPane from './Component/Main/SurveyPane';
import UserView from './Component/FrontViewPagesPlayer/UserView';
import EquipmentView from './Component/FrontViewPagesPlayer/EquipmentView'
import AddEventsPopup from './Component/Main/AddEventsPopup'
import AdminTeamView from './Component/Admin/AdminTeamView/AdminTeamView.js';
import ManageEquipmentView from './Component/CoachView/ManageEquipment/ManageEquipmentView.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='login/' Component={Login} />
          <Route path='reset_password/:token' Component={ResetPassword} />
          <Route path='main/' Component={Main}/>
          <Route path='event-popup/' Component={AddEventsPopup}/>
          <Route path='remind-password/' Component={RemindPassword}/>
          <Route path='team-statistic/' Component={TeamStatistic}/>
          <Route path='user-view/' Component={UserView}/>
          <Route path='equipment-view/' Component={EquipmentView}/>
          <Route path='registrationform/' Component={RegistrationForm}/>
          <Route path='calendar/' Component={Calendar} />
          <Route path='calendar-component/' Component={CalendarComponent} />
          <Route path='calendarpane/' Component={CalendarPane} />
          <Route path='navbar/' Component={NavBar} />
          <Route path='noticespane/' Component={NoticesPane} />
          <Route path='profilepane/' Component={ProfilePane} />
          <Route path='statisticspane/' Component={StatisticsPane} />
          <Route path='surveypane/' Component={SurveyPane} />
          <Route path='createteam/' Component={CreatingTeam}/>
          <Route path='manageteam/' Component={ManageTeam} />
          <Route path='manage-equipment' Component={ManageEquipmentView} />
          <Route path='registrationcouch/' Component={RegistrationCouch} />
          <Route path='/teamstatisticouch' Component={TeamStatisticCouch}/>
          <Route path='/teaminformationcouch' Component={TeamInformationCouch}/>
          <Route path='/adminteamview' Component={AdminTeamView}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
