import React from 'react';
import { useState } from 'react';
// import './App.css';
import Homepage from './components/Homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/register';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {

  const [user , setLoginUser] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={user && user._id ? <Homepage usern={user.name}/> : <Login setLoginUser={setLoginUser}/>} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
