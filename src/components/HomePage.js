import { useRef, useState, useEffect } from 'react'
import userService from '../service/userService'
import toast from '../service/toaster'
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from './Card'

const Home = () => {
    const navigate = useNavigate();
    return (

        <div style={{ width: "100%", height: "100vh", backgroundImage: `url(https://images.unsplash.com/photo-1661090790202-2f9173c66362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`, backgroundSize: 'cover' }}>
            <Card />
        </div>
    )
}

export default Home;