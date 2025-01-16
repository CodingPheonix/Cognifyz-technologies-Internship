import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Hello from './Components/Hello.jsx';
import './index.css'
import App from './App.jsx'
import Admin_home from './Components/Admin_home.jsx';
import User_home from './Components/User_home.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/hello" element={<Hello/>} />
      <Route path='/admin_home' element={<Admin_home/>} />
      <Route path='/user_home' element={<User_home/>} />
    </Routes>
  </BrowserRouter>
)
