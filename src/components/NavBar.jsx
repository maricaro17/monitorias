import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/authAction';

const NavBar = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.auth);
  return (
    <div>
        <Navbar>
        <Container>
          <Nav className="me-auto">
          <Link
              className="nav-link text-white bold text-decoration-none mx-4"
              to="/"
            >
             Home
            </Link>
            <Link
              className="nav-link text-white bold text-decoration-none mx-4"
              to="/monitores"
            >
              Monitores
            </Link>
            <Link
              className="nav-link text-white bold text-decoration-none mx-4"
              to="/monitorias"
            >
              Monitorias
            </Link>
    
            <Link
              className="nav-link text-white bold text-decoration-none mx-4"
              to="/login"
            >
              Login
            </Link>
            <button
              className="nav-link text-white bold text-decoration-none bg-transparent"
              style={{ display: user?.isAuthenticated ? "block" : "none", border: "none"}}
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </Nav>
        
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar