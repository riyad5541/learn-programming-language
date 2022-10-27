import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container>
                    <div>
                        <img src="" alt="" />
                        <Navbar.Brand>Language For Code</Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className='d-flex justify-content-between'>
                            <Nav>
                                <Link className='mx-2' to='/'>Courses</Link>
                                <Link>FAQ</Link>
                                <Link className='mx-2' to='/blog'>Blog</Link>
                            </Nav>
                            <Nav>
                                {/* <Nav.Link href='#deets'>{user?.displayName}</Nav.Link> */}
                                <p className='mx-2'><Link to={'/login'}>Login</Link></p>
                                <p><Link to={'/register'}>Register</Link></p>
                            </Nav>
                            <p className='mx-2'>{user?.displayName}</p>
                        </div>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;