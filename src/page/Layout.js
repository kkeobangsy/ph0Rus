import { Outlet, Link } from "react-router-dom";
import React from "react";
import '../App.css';
import logo from "../pic/pho.jpg";
import Popup from "reactjs-popup";
import bags from "../pic/bag.jpg";


const Layout = () => {
    return(
        <>
            <div className="pic">
                <img src={logo} className="App-logo"/>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/" className="home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Contact" className="contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Menu" className="menu">Menu</Link>
                    </li>
                </ul>
            </nav>
            <div className='button'>
                <Popup trigger={<button> SignUp </button>} position="left center">
                    <label>
                        <p className='popemail'>Email:</p>
                        <input type="text"/>
                        <p className='poppassword'>Password:</p>
                        <input type="text"/>
                        <p className='poprepassword'>Retype Password:</p>
                        <input type="text"/>
                    </label>
                    <button type="button">Submit</button>
                </Popup>
                <Popup trigger={<button>LogIn</button>} position="left center">
                    <label>
                        <p className='popname'>Email</p>
                        <input type='text'/>
                        <p className='poppassword'>Password</p>
                        <input type='text'/>
                    </label>
                    <button type='button'>Submit</button>
                </Popup>
                <div className='bag'>
                    <img src={bags} className='bags'/>
                    <p className="dollars">0</p>
                </div>
            </div>

            <Outlet/>
        </>
    )
};


export default Layout;
