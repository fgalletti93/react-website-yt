import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/react-website-yt' element={<Home/>} />
          <Route path='/react-website-yt/services' element={<Services/>} />
          <Route path='/react-website-yt/products' element={<Products/>} />
          <Route path='/react-website-yt/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>

    </>

  );
}

export default App;
