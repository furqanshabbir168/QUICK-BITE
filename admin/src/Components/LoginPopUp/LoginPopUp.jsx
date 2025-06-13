import React, { useState } from "react";
import './LoginPopUp.css';
import cross from '../../assets/cross-icon.png';
import axios from "axios";
import { toast } from "react-toastify";

function LoginPopUp ({setShowLogin,setToken}) {

    const url = 'http://localhost:4000';

    const [ currentState , setCurrentState ] = useState('login');
    const [ data , setData ] = useState({
        email:"",
        password:"",
        secret:""
    })
    function onChangeHandle(event){
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    async function onSubmitHandle(event) {
        event.preventDefault();

        let newUrl = url;
        if(currentState==='login'){
            newUrl += '/api/admin/login'
        }else{
            newUrl += '/api/admin/register'
        }
        try{
            const response = await axios.post(newUrl,data);
        if(response){
            setData({
                email:"",
        password:"",
        secret:""
            })
            toast.success(response.data.message);
            localStorage.setItem("token",response.data.token)
            setToken(response.data.token);
            setShowLogin(false);
            
        }
        } catch(error){
            console.log(error);
        }
    }


    return(
        <div className="login">
            <form onSubmit={onSubmitHandle}>
                <div className="login-popup">
            <div className="head">
                {currentState==='login'?<><h1>Login</h1></>:<><h1>Sign Up</h1></>}
                <img onClick={()=>{setShowLogin(false)}} src={cross} alt="" />
            </div>
            <div className="inputs">
                {currentState==='login'?<><input type="email" placeholder="Enter Your Email" required name="email" value={data.email} onChange={onChangeHandle}/></>:<><input type="email" placeholder="Enter Your Email" required name="email" value={data.email} onChange={onChangeHandle}/></>}
                {currentState==='login'?<><input type="password" placeholder="Enter Your Password" required name="password" value={data.password} onChange={onChangeHandle}/></>:<><input type="password" placeholder="Enter Your Password" required name="password" value={data.password} onChange={onChangeHandle}/></>}
                {currentState==='login'?<></>:<><input type="password" placeholder="Enter QuickBite secret Key to create Account" required name="secret" value={data.key} onChange={onChangeHandle}/></>}
            </div>
            <div className="buttons">
                {currentState==='login'?<><button type="submit">Login</button></>:<><button type="submit">Create Account</button></>}
            </div>
            <div className="checkbox">
                {currentState==='login'?<><input type="checkbox" required /></>:<><input type="checkbox" required /></>}
                <p>By continuing , You agree to our terms & conditions.</p>
                {currentState==='login'?<><h3 onClick={()=>{setCurrentState('signUp')}}>Create Account</h3></>:<><h3 onClick={()=>{setCurrentState('login')}}>Login Here</h3></>}
            </div>
        </div>
            </form>
        </div>
        
    );
}
export default LoginPopUp