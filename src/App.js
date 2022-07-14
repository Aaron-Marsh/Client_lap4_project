import { Routes, Route } from 'react-router-dom';
import { Home, Books, Forums, Profile, Search } from './pages/index';
import { Navbar } from './components/index'

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <h1>Read Herring</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<Books />}/>
        <Route path="/forums" element={<Forums />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
    </>
  );
}

export default App;
