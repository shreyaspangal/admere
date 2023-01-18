import React, { useEffect, useState } from 'react';
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
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import NoRouteFound from './components/NoRouteFound';

function App() {

  let [userInfo, setUserInfo] = useState(localStorage.getItem("userInfo"));

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate(window.location.pathname);
    } else {
      navigate("/register");
    }
  }, [userInfo])


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile-upload" element={<ProfileUpload />} />
        <Route path="/contest-info" element={<ContestInfo />} />
        <Route path='*' element={<NoRouteFound />} />
      </Routes>
    </div>
  );
}

export default App;
