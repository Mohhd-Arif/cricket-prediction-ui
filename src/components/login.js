import { useRef, useState, useEffect } from 'react'
import userService from '../service/userService'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
const Login = () => {
    const [usercreds, setUsercreds] = useState({
        email: "",
        password: ""
    });
    let [showCred, setShowCred] = useState(false);

    const credHandler = (e) => {
        setUsercreds(creds => ({ ...creds, [e.target.name]: e.target.value }))
    }

    const loginHandler = (event) => {
        event.preventDefault()
        userService(usercreds).then(resp => {
            localStorage.setItem("token", resp.data.token);
            console.log(localStorage.getItem("token"));
        }).catch(err => console.log(err))
        setShowCred(!showCred)
    }


    function StackingExample(msg) {
        const [show, setShow] = useState(false);

        return (
            <Row>
                <Col xs={6}>
                    <ToastContainer className="p-3" position="top-end">
                        <Toast onClose={() => setShow(false)} show={show} >
                            <Toast.Header>
                                <img
                                    src="../../public/logo192.png"
                                    className="rounded me-10"
                                    alt=""
                                />
                                <strong className="me-auto">Cricket Prediction</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>{msg}</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Col>
                <Col xs={6}>
                    <Button onClick={() => setShow(true)}>Show Toast</Button>
                </Col>
            </Row>
        );
    }

    return (
        <div className="wrapper">
            <form className="login">
                <p className="title">Log in</p>
                <input type="text" name="email" onChange={credHandler} placeholder="Email" />
                <i className="fa fa-user"></i>
                <input type="password" name="password" onChange={credHandler} placeholder="Password" />
                <i className="fa fa-key"></i>
                <br />
                <button onClick={loginHandler}>
                    <i className="spinner"></i>
                    <span className="state">Log in</span>
                </button>
                {showCred && <p>Hi {usercreds?.email.split('@')[0].toUpperCase()} !!</p>}
            </form>
            {StackingExample()}
        </div>
    )
}

export default Login