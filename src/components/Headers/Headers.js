import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
const Headers = () => {
    return (
        <div>
            <Navbar bg="dark">
                <Navbar.Brand>
                    <Container>
                        <Link to="/">
                            <img
                                src={logo}
                                width="200"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Link>
                    </Container>
                </Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default Headers;