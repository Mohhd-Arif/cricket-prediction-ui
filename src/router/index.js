import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from '../components/login'
import Test from '../components/test'
import Registration from '../components/registration'
import ForgotPassword from '../components/ForgotPassword'
import ConfirmOtp from '../components/ConfirmOtp'
import GetOtp from '../components/GetOtp'
import HomePage from '../components/HomePage'

function router(){
    return (

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/getOTP" element={<GetOtp />} />
            <Route path="/confirmOTP" element={<ConfirmOtp />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    )
}

export default router;

