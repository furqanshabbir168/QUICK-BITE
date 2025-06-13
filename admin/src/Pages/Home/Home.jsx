import React from "react";
import './Home.css';
import poster from '../../assets/poster.jpg'

function Home () {
    return(
        <div className="home" style={{backgroundImage: `url(${poster})`,width:"100%",height:"84vh",}}>
  <div className="heading">
    <h1 className="h1-white">Welcome</h1>
    <h1 className="h1-white">to</h1>
    <h1 className="h1-main">QUICK BITE'S</h1>
    <h1 className="h1-white">Admin  </h1>
    <h1 className="h1-white">Pannel</h1>
  </div>
  <p className="paragragh">Welcome to the QuickBite Admin Panel. Here, you can manage orders, update menus, and ensure a smooth experience for both customers and the team. Stay on top of everything and keep QuickBite running efficiently!</p>
  <p className="paragragh">Login here or create account to update orders and products.</p>
</div>

    );
}
export default Home