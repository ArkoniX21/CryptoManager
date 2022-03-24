import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import NavBar from './Components/NavBar';
import MainPage from './Pages/MainPage';
import {BrowserRouter} from 'react-router-dom';
import SideBar from './Components/SideBar';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <MainPage />
    </BrowserRouter>
  );
};

export default App;