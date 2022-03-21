import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';


const NavBar = () => {
    return (
        <Navbar bg='dark' fixed='top'>
            <Container>
            <Nav.Link href="/" bsStyle="default" style={{color:"white"}} className='' >WINX</Nav.Link>
            <Button variant='outline-light'>Войти</Button>
            <Button variant='outline-light'>Попробовать бесплатно</Button>
            </Container>
        </Navbar>
    );
};

export default NavBar;