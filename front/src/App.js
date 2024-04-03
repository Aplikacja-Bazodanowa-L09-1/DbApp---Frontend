import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './Component/Main';
import Contacts from './Component/Contact';


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="" Component={Main}/>
            <Route path="contact/" Component={Contacts}/>
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
