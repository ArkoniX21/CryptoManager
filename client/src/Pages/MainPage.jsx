import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../Components/SideBar';

const MainPage = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    WELCOME TO THE MAINPAGE
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;