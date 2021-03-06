import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import SideBar from './SideBar';

const options = [
    {
        name: 'Enable both scrolling & backdrop',
        scroll: true,
        backdrop: true,
    }
]

const NavBar = () => {
    return (
        <div>
        <Navbar bg='dark' fixed='top'>
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Navbar.Brand href="/" bsStyle="default" style={{color:"white"}} className=''>WINX</Navbar.Brand>
            </Nav>
            <Button href='/login' variant='outline-light'>Войти</Button>
            <Button href='/reg' variant='outline-light' className='ms-2'>Попробовать бесплатно</Button>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        
    );
};

export default NavBar;