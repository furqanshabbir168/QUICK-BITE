import React, { useContext, useState } from "react";
import './LoginPopUp.css'
import crossicon from '../../assets/cross.png'
import { StoreContext } from "../../Context/StoreContext";
import axios from 'axios'
import { toast } from "react-toastify";

function LoginPopUp ({setShowLogin}) {

    const [currentState , setCurrentState] = useState('login');
    const { url , token , setToken } = useContext(StoreContext);

    const [ data , setData ] = useState({
        name:"",
        email:"",
        password:""
    });
    function onChangeHandle(event){
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))    
    }
    async function onSubmitHandle(event) {
        event.preventDefault();
        
        let newUrl = url;
        if(currentState==='signUp'){
            newUrl += '/api/user/register'
        }else{
            newUrl += '/api/user/login'
        }
        try{
            const response = await axios.post(newUrl,data);
        if(response.data.success){
            setData({
                name:"",
                email:"",
                password:""
            })
            toast.success(response.data.message);
            localStorage.setItem("token",response.data.token);
            setToken(response.data.token);
            setShowLogin(false);
        }
        } catch(error){
            toast.error(response.data.message);
        }
        


    }
    

    return(
        <div className="loginpopup">
            <form onSubmit={onSubmitHandle}>
                <div className="signup-login">
                <div className="heading">
                    <h1>{currentState==='signUp'?'Sign Up':'Login'}</h1>
                    <img onClick={()=>setShowLogin(false)} src={crossicon} alt="" />
                </div>
                <div className="inputs">
                    {currentState==='signUp'?<><input type="text" placeholder="Your Name" required name="name" value={data.name} onChange={onChangeHandle} /></>:<><input type="text" placeholder="Your Name" required name="name" value={data.name} onChange={onChangeHandle}/> </>}
                    {currentState==='signUp'?<><input type="email" placeholder="Enter Your Email" required name="email" value={data.email} onChange={onChangeHandle}/></>:<><input type="email" placeholder="Enter Your Email" required name="email" value={data.email} onChange={onChangeHandle}/></>}
                    {currentState==='signUp'?<><input type="password" placeholder="Enter Your Password" required name="password" value={data.password} onChange={onChangeHandle}/></>:<><input type="password" placeholder="Enter Your Password" required name="password" value={data.password} onChange={onChangeHandle}/></>}
                </div>
                
                <div>
                    {currentState==='signUp'?<><button>Create Account</button></>:<><button>Login</button></>}
                </div>
                <div className="privacy-policy">
                    {currentState==='signUp'?<><input type="checkbox" name="checkbox" required/></>:<><input type="checkbox" name="checkbox" required/></>}
                    <p>By continuing , I agree to the terms of use & privacy policy.</p>
                </div>
                <div className="note">
                    {currentState==='signUp'?<><p>Already have an Account ?</p></>:<><p>Create a new Account .</p></>}
                    {currentState==='signUp'?<><h4 onClick={()=>setCurrentState('login')}>Login Here</h4></>:<><h4 onClick={()=>setCurrentState('signUp')}>Click Here</h4></>}
                </div>
            </div>
            </form>
            
        </div>
    );
}
export default LoginPopUp