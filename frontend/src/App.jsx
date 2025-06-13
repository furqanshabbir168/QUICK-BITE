import React, { useContext, useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";
import { ToastContainer } from 'react-toastify';
import LogoutWarning from "./Components/LogoutWarning/LogoutWarning";
import Verify from "./Components/Verify/Verify";
import MyOrders from "./Pages/MyOrders/MyOrders";
import { StoreContext } from "./Context/StoreContext";
import ScrollToTop from "./Components/ScrollToTop";
import Company from "./Components/Company/Company";

function App () {

  const [showLogin , setShowLogin] = useState(false);
  const [logoutWarning , setLogoutWarning] = useState(false);
  const {token} = useContext(StoreContext);
  const navigate = useNavigate();

  // ✅ Correct way to redirect based on token
  useEffect(() => {
    if (!token && window.location.pathname === "/myorder") {
      navigate("/");
    }
  }, [token, navigate]);

  return(
    <div>
      <ToastContainer/>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      {logoutWarning && <LogoutWarning setLogoutWarning={setLogoutWarning} />}
      <NavBar setShowLogin={setShowLogin} setLogoutWarning={setLogoutWarning}/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/placeorder" element={<PlaceOrder/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/myorder" element={<MyOrders/>}/>
        <Route path="/company" element={<Company/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
