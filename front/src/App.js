import './App.css';
import Register from './Component/Registration';
import Login from './Component/Login'
import Menu from './Component/Menu'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Component/Main';
import RemindPassword from './Component/RemindPassword';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Menu} />
          <Route path='login/' Component={Login} />
          <Route path='register/' Component={Register} />
          <Route path='main/' Component={Main}/>
          <Route path='remind-password/' Component={RemindPassword}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
