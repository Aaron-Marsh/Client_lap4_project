import { Routes, Route } from 'react-router-dom';
import {Home, Books, Forums} from './pages/index';


import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Books />}/>
        <Route path="/Forums" element={<Forums />}/>
      </Routes>
    </>
  );
}

export default App;
