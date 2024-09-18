
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">

        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path='/dashboard' element={
            isLoggedIn ? <Dashboard/> : <Navigate to="/login"/>}>
          </Route>
       </Routes>
    </div>
  );
}

export default App;
