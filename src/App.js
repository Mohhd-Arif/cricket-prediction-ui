import Login from './components/login'
import Test from './components/test'
import Registration from './components/registration'
import ForgotPassword from './components/ForgotPassword'
import ConfirmOtp from './components/ConfirmOtp'
import GetOtp from './components/GetOtp'
import HomePage from './components/HomePage'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
// import ToastContainer from './service/toaster'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';


function App() {

  return (
    <main className='App'>
      <Navbar bg="light" expand="lg" style={{ position: 'sticky', height: '8vh' }}>
        <Container fluid>
          <Navbar.Brand href="/home"><h2 className="text-center"><span><img src={require('./assets/cricket-player.png')} height={40} width={40}></img></span> Cricket Prediction</h2></Navbar.Brand>
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
      </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/getOTP" element={<GetOtp />} />
          <Route path="/confirmOTP" element={<ConfirmOtp />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </main>
  );
}

export default App;
