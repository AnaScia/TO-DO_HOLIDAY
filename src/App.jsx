import './App.css';
import Packing from './view/Packing';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Budget from './view/Budget';
import Blog from './view/Blog';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Packing />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
