import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Choose from './components/Choose';
// import Services from './components/Services'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <Choose />
            {/* <Services /> */}
          </>
        } />
        {/* Add more routes here later when you create pages */}
      </Routes>
    </>
  );
}

export default App;