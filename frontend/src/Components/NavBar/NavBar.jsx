import React, { useContext, useState } from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

import search from '../../assets/search-bar.png'
import cart from '../../assets/cart.png'
import { StoreContext } from "../../Context/StoreContext";
import profile from '../../assets/user-profile.png'
import order from '../../assets/user-order.png'
import logout from '../../assets/logout.png'

function NavBar ({setShowLogin,setLogoutWarning}) {
    const { token  } = useContext(StoreContext);
    const [menu , setmenu] = useState('home');

    return(
        <div className="navbar">
            <div className="navbar-left">
               <h1>QUICK BITE.</h1> 
            </div>
            <div className="navbar-middle">
                <ul>
                    <Link to = '/' onClick={()=>setmenu('home')} className={menu==='home'?'active':""}>home</Link>
                    <a href="#menu" onClick={()=>setmenu('menu')} className={menu==='menu'?'active':""}>menu</a>
                    <a href="#footer" onClick={()=>setmenu('about')} className={menu==='about'?'active':""}>about</a>
                    <a href="#footer" onClick={()=>setmenu('contact')} className={menu==='contact'?'active':""}>contact us</a>
                    <a href="http://localhost:5174">admin pannel</a>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search} alt="" />
                <Link to='/cart'><img src={cart} alt="" /></Link>
                {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>:
                <div className="user-info">
                    <img className="profile" src={profile} alt="Profile" />
                        <ul className="dropdown">
                            <Link  className="order" to = '/myorder'><li><img src={order} alt="" /> Order</li></Link>
                            <hr />
                            <li  onClick={()=>{setLogoutWarning(true)}}><img src={logout} alt="" /> Logout</li>
                            <hr />
                        </ul>
                </div>
                }
                
            </div>
        </div>
    );
}
export default NavBar