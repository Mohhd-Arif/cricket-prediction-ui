import axios from 'axios'
const host = 'http://localhost:8000/api/v1'

const login = async (creds)=>{
    try{
        let {data} = await axios.post(`${host}/login`,creds)
        return data;
          
    }
    catch(err){
        throw new Error(err.response.data.message);
    }

}

const register = async (userInfo)=>{
    try{
        let {data} = await axios.post(`${host}/register`,userInfo)
        return data;
          
    }
    catch(err){
        throw new Error(err.response.data.message);
    }

}

const getOTP = async (otpReq)=>{
    try{
        let {data} = await axios.put(`${host}/otp`,otpReq)
        return data;
          
    }
    catch(err){
        throw new Error(err.response.data.message);
    }

}

const confirmOTP = async (otpReq)=>{
    try{
        let {data} = await axios.post(`${host}/otp`,otpReq)
        return data;
          
    }
    catch(err){
        throw new Error(err.response.data.message);
    }

}

export default {login,register,getOTP,confirmOTP}