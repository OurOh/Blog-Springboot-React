import React, { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Search from '../components/Search'

const Top = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  return (
    <header className="navigation">
        <Navbar expand="lg" className="bg-transparent">
            <Container>
                <Navbar.Brand href="/"><img src="./images/logo.svg" className="img-logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-md-5 me-auto"> 
                        <NavDropdown 
                           title="category" 
                           id="basic-nav-dropdown"
                           show={showDropdown}
                           onMouseEnter={handleMouseEnter}
                           onMouseLeave={handleMouseLeave}
                           className={showDropdown?'dropv':''}
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="about">about</Nav.Link>
                        <Nav.Link href="github">mygithub</Nav.Link>
                        <Nav.Link href="contact">contact</Nav.Link> 
                    </Nav>
                    <Search />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Top