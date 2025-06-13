import react, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import AddFood from "./Pages/AddFood/AddFood";
import ListFood from "./Pages/ListFood/ListFood";
import Orders from "./Pages/Orders/Orders";
import { ToastContainer } from 'react-toastify';
import Home from "./Pages/Home/Home";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";
import LogoutWarning from "./Components/LogoutWarning/LogoutWarning";
function App(){

  const [ token , setToken ] = useState("");
  const [ showLogin , setShowLogin ] = useState(false);
  const [ logoutWarning , setLogoutWarning ] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
    }
  },[]);


  return(
    <div>
      <ToastContainer/>
      <NavBar setShowLogin={setShowLogin} token={token} setLogoutWarning={setLogoutWarning}/>
      {showLogin===true?<LoginPopUp setShowLogin={setShowLogin} setToken={setToken}/>:<></>}
      {logoutWarning===true?<LogoutWarning setLogoutWarning={setLogoutWarning} setToken={setToken}/>:<></>}
      {!token?<></>:<SideBar/>}
      <Routes>
        <Route path="/" element={!token?<><Home/></>:<><AddFood/></>}/>
        <Route path="/addfood" element={!token?<><Home/></>:<AddFood/>}/>
        <Route path="/listfood" element={!token?<><Home/></>:<ListFood/>}/>
        <Route path="/orders" element={!token?<><Home/></>:<Orders/>}/>
      </Routes>
    </div>
  );
}
export default App