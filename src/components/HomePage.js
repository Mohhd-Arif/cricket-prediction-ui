import { useRef, useState, useEffect } from 'react'
import userService from '../service/userService'
import toast from '../service/toaster'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

const Home = ()=>{
    return(
        <h1>Hello from home page</h1>
    )
}

export default Home;