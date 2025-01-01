import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Components/Home';
import Welcome from './Components/Welcome';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
