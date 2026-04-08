import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx';
import EditRam from './pages/EditRam.jsx'
import Ram from './pages/Ram.jsx'
import CreateRam from './pages/CreateRam.jsx';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className='navbar'>
          <Link to="/createram">Create a ram</Link>
          <Link to="/rams">Homepage</Link>
        </div>
        <Routes>
          <Route path="/rams" element={<Home />} />
          <Route path="/rams/:id" element={<Ram />} />
          <Route path="/editram/:id" element={<EditRam />} />
          <Route path="/createram/" element={<CreateRam />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
