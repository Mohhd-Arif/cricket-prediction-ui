import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Toast from 'react-bootstrap/Toast';
// import ToastContainer from 'react-bootstrap/ToastContainer';
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const success = (msg) => {
    toast.success(msg, {
            icon: ({theme, type}) =>  <img src={require('../assets/cricket.png')} height={25} width={25}/>
          }) 
          return true
}

const error = (msg) => {
    toast.error(msg, {
            icon: ({theme, type}) =>  <img src={require('../assets/errorball.png')} height={25} width={25}/>
          }) 
          return true
}

export default {success,error};