import { useRef, useState, useEffect } from 'react'
import userService from '../service/userService'
import toast from '../service/toaster'
import {Button,Col,Form,InputGroup,Row} from 'react-bootstrap';

const Register = () => {
    const [validated, setValidated] = useState(false);
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
            console.log("inside if");
        }
        else {
            console.log("inside else");
            // userService(usercreds).then(resp => {
            //     toast.success(resp.message);
            //     localStorage.setItem("token", resp.data.token);
            //     console.log(localStorage.getItem("token"));
            // }).catch(err => {
            //     toast.error(err.message);
            //     console.log(err)
            // })
        }

        setValidated(true);
        //     
    };

    return (
        <div>
            <h1>hello Registration page</h1>
        </div>
    )
}

export default Register;