import { useRef, useState, useEffect } from 'react'
import userService from '../service/userService'
import toast from '../service/toaster'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState("password");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [userinfo, setUserinfo] = useState({
        email: "",
        password: ""
    });
    const userinfoHandler = (e) => {
        setUserinfo(creds => ({ ...creds, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        else {
            if(userinfo.password === userinfo.confirmPassword){
                userService.register(userinfo).then(resp => {
                    toast.success(resp.message);
    
                }).catch(err => {
                    toast.error(err.message);
                    console.log(err)
                })
            }
        }
        setFormSubmitted(true)

    }

    return (
        <div className="wrapper">
            <Form noValidate  onSubmit={handleSubmit} className="login">
                <div className="body-str">
                    <h2 className="text-center"><span><img src={require('../assets/cricket-player.png')} height={50} width={50}></img></span> Cricket Prediction</h2>
                    <hr></hr>
                    <h3 className="text-center">Registration</h3>
                    <Row className="mb-2">
                        <Form.Group as={Col} md="16" controlId="validationCustomUsername">
                            <Form.Label>First name</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><span><img src={require("../assets/icons8-badge-24.png")} height={15} width={10}></img></span></InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    onChange={userinfoHandler}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    isInvalid={!userinfo?.firstName && formSubmitted}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide first name.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-2">
                        <Form.Group as={Col} md="16" controlId="validationCustomUsername">
                            <Form.Label>Last name</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><span><img src={require("../assets/icons8-badge-24.png")} height={15} width={10}></img></span></InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    onChange={userinfoHandler}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    isInvalid={!userinfo?.lastName && formSubmitted}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide last name.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-2">
                        <Form.Group as={Col} md="16" controlId="validationCustomUsername">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><span className="fa fa-user"></span></InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    onChange={userinfoHandler}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    isInvalid={!userinfo.email && formSubmitted}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="16" controlId="validationCustom03">
                            <Form.Label>New password</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><span className="fa fa-lock"></span></InputGroup.Text>
                                <Form.Control 
                                type={passwordType} 
                                name="password" 
                                onChange={userinfoHandler} 
                                placeholder="Password"
                                required
                                isInvalid={!userinfo.password && formSubmitted}
                                />
                                
                                <Form.Control.Feedback type="invalid">
                                    Please provide password.
                                </Form.Control.Feedback>
                                
                            </InputGroup>

                        </Form.Group>

                    </Row>
                    {userinfo.password && <Row className="mb-3">
                        <Form.Group md="16">
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><span className="fa fa-lock"></span></InputGroup.Text>
                                <Form.Control type={passwordType} name="confirmPassword" onChange={userinfoHandler} placeholder="Confirm Password"
                                isInvalid={userinfo.password != userinfo.confirmPassword}
                                required/>
                                <Form.Control.Feedback type="invalid">
                                    Password didn't matched!.
                                </Form.Control.Feedback>
                            </InputGroup>

                        </Form.Group>

                    </Row>}
                    <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label="Show Password"
                        onClick={()=>{passwordType=='password'?setPasswordType("text"):setPasswordType("password")}}
                    />

                        <a className="text-right" onClick={() => {
                            navigate("/")
                        }} style={{float:"right" }}>Already Registered?</a>
                </div>
                <Button style={{ position: "absolute", width: "100%", borderRadius: "0 0 4px 4px" }} type="submit">Register</Button>
            </Form>


        </div>
    )
}

export default Register;