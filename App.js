import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home";
import { Container } from 'reactstrap';
import Login from './Login';
import Registration from './Registration';
import Logout from './Logout';
import { ToastContainer } from 'react-toastify';
import { Protector } from './helpers';
//import { useState, useEffect } from 'react';

function App() {
  return (
  <Container>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Protector Component={Home} />} />        
        <Route path='/login' element = {<Login />} />   
        <Route path='/logout' element = {<Logout />} />
        <Route path='/registration' element = {<Registration />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter> 
  </Container>
  );
};
export default App;