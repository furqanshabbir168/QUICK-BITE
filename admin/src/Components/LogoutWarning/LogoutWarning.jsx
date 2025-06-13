import React from "react";
import './LogoutWarning.css';

function LogoutWarning({setLogoutWarning,setToken}){

    function LogOut(){
        localStorage.removeItem("token");
        setToken("");
        setLogoutWarning(false);
    }


    return(
        <div>
            <div className="logout-warning">
  <div className="popup">
    <h3>Are you sure you really want to logout?</h3>
    <div className="buttons">
      <button onClick={()=>{setLogoutWarning(false)}} className="cancel-btn">Cancel</button>
      <button onClick={LogOut} className="logout-btn">Logout</button>
    </div>
  </div>
</div>
        </div>
    );
}
export default LogoutWarning