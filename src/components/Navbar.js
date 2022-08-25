import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import Config from '../config'

function NavBar(){
    const location = useLocation();
    console.log(location.pathname);
    return (

        <div>
            {Config.showNavbar.includes(location.pathname)&&<Navbar bg="light" expand="lg" style={{ position: 'sticky'}}>
        <Container fluid>
          <Navbar.Brand href="/home"><h2 className="text-center"><span><img src={require('../assets/cricket-player.png')} height={40} width={40}></img></span> Cricket Prediction</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <NavDropdown title="Cricket Formats" id="navbarScrollingDropdown">
                <NavDropdown.Item >T20</NavDropdown.Item>
                <NavDropdown.Item >
                  1 Day
                </NavDropdown.Item>

              </NavDropdown>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>}
        </div>
    )
}

export default NavBar;

