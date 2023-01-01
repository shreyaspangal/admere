import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import ProfileUpload from './pages/ProfileUpload';
import RegisterForm from './pages/RegisterForm';

function App() {
  return (
    <div className="app">
      {/* <Homepage /> */}
      {/* <RegisterForm /> */}
      {/* <Login /> */}
      <ProfileUpload />
    </div>
  );
}

export default App;
