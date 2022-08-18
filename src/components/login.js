import { useRef, useState, useEffect } from 'react'
import userService from '../service/userService'
import toast from '../service/toaster'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

// import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [usercreds, setUsercreds] = useState({
        email: "",
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
            userService.login(usercreds).then(resp => {
                toast.success(resp.message);
                localStorage.setItem("token", resp.data.token);
                console.log(localStorage.getItem("token"));
                navigate("/home")
            }).catch(err => {
                toast.error(err.message);
                console.log(err)
            })
        }

        setValidated(true);
        //     
    };

    return (

        <div className="wrapper">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="login">
                <div className="body-str">
                    <h2 className="text-center"><span><img src={require('../assets/cricket-player.png')} height={50} width={50}></img></span> Cricket Prediction</h2>
                    <hr></hr>
                    <h3 className="text-center">Login</h3>
                    <Row className="mb-2">
                        <Form.Group as={Col} md="16" controlId="validationCustomUsername">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><span className="fa fa-user"></span></InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    onChange={credHandler}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="16" controlId="validationCustom03">
                            <Form.Label>Password</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><span className="fa fa-lock"></span></InputGroup.Text>
                                <Form.Control type="password" name="password" onChange={credHandler} placeholder="Password" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide password.
                                </Form.Control.Feedback>
                            </InputGroup>

                        </Form.Group>

                    </Row>
                    <div style={{ width: "100%", display: "flex" }}>
                        <a onClick={() => {
                            navigate("/getOTP")
                        }} style={{ width: "100%", display: "flex", justifyContent: "left" }}>Forgot Password ?</a>
                        <a onClick={() => {
                            navigate("/register")
                        }} style={{ width: "100%", display: "flex", justifyContent: "right" }}>Create Account</a>
                    </div>
                </div>
                <Button style={{ position: "absolute", width: "100%", borderRadius: "0 0 4px 4px" }} type="submit">Login</Button>
            </Form>


        </div>
    )
}

export default Login