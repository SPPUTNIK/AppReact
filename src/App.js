import './app.css';
import AppSidebar from './Sidebar/AppSidebar';
import AppHeader from './Sidebar/AppHeader';
import AppContent from './Content/AppContent';

function App() {
  return (
    <div className="App">
      <AppSidebar/>

      <AppHeader/>
      {/* <AppContent/> */}
      
    </div>
  );
}

export default App;
