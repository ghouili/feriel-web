import { useState } from 'react';
import './App.css';

import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';

function App() {

  
  return (
    <div className="App">
      <NavBar />
      <main>
        <SideBar />
      </main>
    </div>
  );
}

export default App;
