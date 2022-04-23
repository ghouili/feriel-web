import './App.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';
import MainRoutes from './Routes/MainRoutes';

function App() {

  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname === '/login' || location.pathname === '/register' ?
        <></>
      :
        <NavBar />
      }
      <main>
        {location.pathname === '/login' || location.pathname === '/register' ?
          <></>
        :
          <SideBar />
        }
        <MainRoutes />
      </main>
    </div>
  );
}

export default App;
