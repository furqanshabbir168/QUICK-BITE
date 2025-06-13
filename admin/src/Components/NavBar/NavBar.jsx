import React from "react";
import './NavBar.css'
import profile from '../../assets/profile-image.png'

function NavBar({setShowLogin,token,setLogoutWarning}) {
    
    return(
        <div className="navbar">
            <div className="navbar-left">
                <h1>
                    Quick Bite
                </h1>
                <p>Admin Pannel</p>
            </div>
            <div className="navbar-right">
                {!token?<><button onClick={()=>{setShowLogin(true)}}>Login</button></>:<><button onClick={()=>{setLogoutWarning(true)}}>LogOut</button></>}
                <img src={profile} alt="" />
                
            </div>
        </div>
    );
}
export default NavBar