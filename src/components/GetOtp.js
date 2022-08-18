import { useRef, useState, useEffect } from 'react'
import userService from '../service/userService'
import toast from '../service/toaster'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

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
            navigate('/confirmOTP')
            userService.login(usercreds).then(resp => {
                toast.success(resp.message);
                localStorage.setItem("token", resp.data.token);
                console.log(localStorage.getItem("token"));
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
                    <h3 className="text-center">Get OTP</h3>
                    <Row className="mb-2">
                        <Form.Group as={Col} md="16" controlId="validationCustomUsername">
                            <Form.Label>Registered Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><span className="fa fa-user"></span></InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="Registered Email"
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
                    <Row className="mb-2">
                        <Form.Group as={Col} md="16" controlId="validationCustomUsername">
                            <Form.Label>Registered Mobile No.</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><span className="fa fa-user"></span></InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    name="mobile"
                                    placeholder="Registered Mobile No."
                                    onChange={credHandler}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide mobile number.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    
                    <p1><strong>NOTE :</strong> Make sure that this mobile number is linked to your registered account.</p1>
                    <br/>
                    <p1><strong>STEP 1:</strong> add this <a>+1(415)523-886</a> to you contact.</p1>
                    <br/>
                    <p1><strong>STEP 2:</strong> send message <strong>join giving-pair</strong> using your whatsapp with the same registered mobile number.</p1>
                </div>
                <Button style={{ position: "absolute", width: "100%", borderRadius: "0 0 4px 4px" }} type="submit">Get OTP</Button>
            </Form>


        </div>
    )
}

export default Login