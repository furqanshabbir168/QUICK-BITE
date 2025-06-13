import React from "react";
import './Header.css'
import background from '../../assets/header-img.jpg'

function Header() {
    return(
        <div className="header" style={{backgroundImage:`url(${background})`}}>
            <h1>Order your favourite food here</h1>
            <p>Craving something delicious? Order fresh, fast, and tasty bites at Quick Bite – your go-to spot for easy and delicious meals! Hot, fresh, and delivered to your door in no time!</p>
            <a href="#menu"><button>View Menu</button></a>
        </div>
    );
}
export default Header