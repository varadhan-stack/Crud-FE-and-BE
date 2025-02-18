import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const ConstructNavbar = () => {
  // State to track whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Toggle login state
  const toggleLogin = () => setIsLoggedIn(isLoggedIn);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Superstore</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              {/* Common Navbar Items */}
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>

              {/* Dynamic Navbar Items based on login state */}
              {isLoggedIn ? (
                <>
                  <Nav.Link href="#">Profile</Nav.Link>
                  <Nav.Link href="#">Orders</Nav.Link>
                  <Button variant="outline-light" onClick={toggleLogin}>Logout</Button>
                </>
              ) : (
                <>
                  <Nav.Link href="#">Login</Nav.Link>
                  <Nav.Link href="#">Sign Up</Nav.Link>
                  <Button variant="outline-light" onClick={toggleLogin}>Login</Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default ConstructNavbar;
