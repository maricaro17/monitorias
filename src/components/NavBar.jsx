import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
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