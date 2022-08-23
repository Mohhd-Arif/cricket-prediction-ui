import { useRef, useState, useEffect } from 'react'
import userService from '../service/userService'
import toast from '../service/toaster'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

// import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [usercreds, setUsercreds] = useState({
        email: localStorage.getItem('email'),
        password: ""
    });
    const navigate = useNavigate();
    let [showCred, setShowCred] = useState(false);

    const credHandler = (e) => {
        setUsercreds(creds => ({ ...creds, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            userService.resetPassword(usercreds).then(resp => {
                toast.success(resp.message);
                navigate('/')
            }).catch(err => {
                toast.error(err.message);
                console.log(err)
            })
        }

        setValidated(true);
        //     
    };

    return (
        <div style={{ width: "100%", height:"100vh", background:`url(https://images.unsplash.com/photo-1631194758628-71ec7c35137e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)`,backgroundSize: 'cover'}}>
        
        <div className="wrapper">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="login">
                <div className="body-str">
                    <h2 className="text-center"><span><img src={require('../assets/cricket-player.png')} height={50} width={50}></img></span> Cricket Prediction</h2>
                    <hr></hr>
                    <h3 className="text-center">Set New Password</h3>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="16" controlId="validationCustom03">
                            <Form.Label>New Password</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><span className="fa fa-lock"></span></InputGroup.Text>
                                <Form.Control type="password" name="password" onChange={credHandler} placeholder="Password" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide password.
                                </Form.Control.Feedback>
                            </InputGroup>

                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="16" controlId="validationCustom03">
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><span className="fa fa-lock"></span></InputGroup.Text>
                                <Form.Control type="password" name="confirmpassword" onChange={credHandler} placeholder="Password" required />
                                <Form.Control.Feedback type="invalid">
                                    Please confirm password.
                                </Form.Control.Feedback>
                            </InputGroup>

                        </Form.Group>

                    </Row>
                </div>
                <Button style={{ position: "absolute", width: "100%", borderRadius: "0 0 4px 4px" }} type="submit">Reset Password</Button>
            </Form>


        </div>
        </div>
    )
}

export default Login