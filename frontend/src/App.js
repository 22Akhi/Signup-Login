
import './App.css';
import React from 'react';
import Login from './page/Login';
// import Header from './components/Header';
// import { Outlet } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';
import  Signup  from './page/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
//  <BrowserRouter>
 <Routes>
  <Route path = '/' element = { <Signup />} ></Route>
  <Route path = '/login' element = {<Login />}></Route>
  <Route path = '/signup' element = {<Signup />}></Route>
 </Routes>
//  </BrowserRouter>
  );
}

export default App;
