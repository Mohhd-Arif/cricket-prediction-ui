import { useRef, useState, useEffect } from 'react'
import userService from '../service/userService'

const Login = () => {
    const [usercreds,setUsercreds] = useState({
        email:"",
        password:""
    });
    let [showCred,setShowCred] = useState(false);
    
    const credHandler = (e)=>{
        setUsercreds(creds=>({...creds,[e.target.name]:e.target.value}))
    }

    const loginHandler = (event) =>{
        event.preventDefault()
        userService(usercreds).then(resp=>{
            localStorage.setItem("token",resp.data.token);
            console.log(localStorage.getItem("token"));
        }).catch(err=>console.log(err))
        setShowCred(!showCred)
    }

    return (
        <div className="wrapper">
            <form className="login">
                <p className="title">Log in</p>
                <input type="text" name="email" onChange={credHandler} placeholder="Email"/>
                <i className="fa fa-user"></i>
                <input type="password" name="password" onChange={credHandler} placeholder="Password" />
                <i className="fa fa-key"></i>
                <br/>
                <button onClick={loginHandler}>
                    <i className="spinner"></i>
                    <span className="state">Log in</span>
                </button>
                {showCred && <p>Hi {usercreds?.email.split('@')[0].toUpperCase()} !!</p>}
            </form>
            
        </div>
    )
}

export default Login