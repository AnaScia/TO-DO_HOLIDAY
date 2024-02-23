import './App.css';
import Navbar from './component/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}

export default App;
