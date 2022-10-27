import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    const { user, logOut} = useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container>
                    <div>
                        <img style={{height:'40px'}} src="https://www.clipartmax.com/png/small/184-1841721_web-development-web-design-logo-download-logo-website-png.png" alt="" />
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
                                {
                                    user?.uid ?
                                        <p className='mx-2'><Link onClick={logOut}>Log Out</Link></p>
                                        :
                                        <>
                                            <p className='mx-2'><Link to={'/login'}>Login</Link></p>
                                            <p><Link to={'/register'}>Register</Link></p>
                                        </>

                                }
                                <p>{user.photoURL}</p>
                            </Nav>
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