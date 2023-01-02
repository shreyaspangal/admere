import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ContestInfo from './pages/ContestInfo';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import ProfileUpload from './pages/ProfileUpload';
import RegisterForm from './pages/RegisterForm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-form" element={<RegisterForm />} />
          <Route path="/profile-upload" element={<ProfileUpload />} />
          <Route path="/contest-info" element={<ContestInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
