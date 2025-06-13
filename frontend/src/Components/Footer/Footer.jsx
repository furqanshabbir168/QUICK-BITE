import React from "react";
import './Footer.css';
import facebook from '../../assets/facebook-1.png'
import twitter from '../../assets/twitter-1.png'
import linkdin from '../../assets/linkdin-2.png'
import { Link, useNavigate } from "react-router-dom";

function Footer () {
    return(
        <>
        <div className="footer" id="footer">
            <div className="footer-left">
                <h1>QUICK BITE.</h1>
                <p>Fast, fresh, and delicious—your go-to spot for a quick bite! | Satisfy your cravings in no time with our tasty offerings. | Good food, quick service, happy you!</p>
                <div className="social">
                    <a href="http://facebook.com"><img className="facebook" src={facebook} alt="" /></a>
                    <a href="http://x.com"><img className="twitter" src={twitter} alt="" /></a>
                    <a href="http://linkedin.com"><img className="linkdin" src={linkdin} alt="" /></a>
                </div>
            </div>
            <div className="footer-middle">
                <h1>COMPANY</h1>
                <ul>
                    <Link to = '/'><li>Home</li></Link>
                    <Link to = '/company'><li>About Us</li></Link>
                    <Link to = '/company'><li>Dilevery</li></Link>
                    <Link to = '/company'><li>Privacy Policy</li></Link>
                </ul>
            </div>
            <div className="footer-right">
                <h1>GET IN TOUCH</h1>
                <p>+1-212-435-948</p>
                <p>quickbite@gmail.com</p>
            </div>
        </div>
        
        <div className="copyright">
            <p>CopyRight {new Date().getFullYear()} by QUICK BITE. All rights reserved. | Developed and secured by Furqan.</p>
        </div>
        </>
    );
}
export default Footer