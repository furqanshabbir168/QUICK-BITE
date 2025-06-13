import React, { useContext } from "react";
import './LogoutWarning.css';
import { StoreContext } from "../../Context/StoreContext";
import { toast } from "react-toastify";

function LogoutWarning({setLogoutWarning}){

    const { setToken } = useContext(StoreContext);

     function logOut(){
            localStorage.removeItem("token");
            setToken("");
            toast.success("You are logged Out");
        }


    return(
        <div className="logout-warning">
  <div className="popup">
    <h3>Are you sure you really want to logout?</h3>
    <div className="buttons">
      <button onClick={()=>{setLogoutWarning(false)}} className="cancel-btn">Cancel</button>
      <button onClick={()=>{logOut();setLogoutWarning(false)}} className="logout-btn">Logout</button>
    </div>
  </div>
</div>

    );
}
export default LogoutWarning