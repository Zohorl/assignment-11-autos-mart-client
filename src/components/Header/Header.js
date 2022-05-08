import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import CustomLink from '../CustomLink/CustomLink';



const Header = () => {

    const handleSignOut = () => {
        signOut(auth);
    };
    const [user] = useAuthState(auth);

    return (

        <Navbar collapseOnSelect expand="lg" sticky='top' bg="success" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={40} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink to="/items" className="me-3 fs-5">Items</CustomLink>
                        <CustomLink to="/inventory/:id" className="me-3 fs-5">Inventory</CustomLink>
                        <CustomLink to="/blogs" className="me-3 fs-5">Blogs</CustomLink>
                    </Nav>
                    <Nav>
                        {
                            user && <>
                                <CustomLink to="/manage" className="me-3 fs-5 mt-5">Manage Inventory</CustomLink>
                            </>
                        }
                        {
                            user ?
                                <button onClick={handleSignOut} className="btn btn-link text-white text-decoration-none">Sign Out</button>
                                :
                                <CustomLink to="/login" className="me-3 fs-5">Login</CustomLink>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;