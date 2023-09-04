import './app.css';

import AppSidebar from './Sidebar/AppSidebar';
import AppHeader from './Sidebar/AppHeader';

import Dashboard from './Dashboard/Dashboard';
import Friends from './Friend/Friend';
import Chat from './Chat/Chat';
import Game from './Game/Game';
import Setting from './Setting/Setting';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <AppSidebar/>
      <AppHeader/>
      <div className="App">

        <Routes>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Friends' element={<Friends/>}></Route>
          <Route path='/Chat' element={<Chat/>}></Route>
          <Route path='/Game' element={<Game/>}></Route>
          <Route path='/Setting' element={<Setting/>}></Route>
        </Routes>
        
      </div>
    </>
  );
}

export default App;
