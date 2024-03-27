import React from 'react';
import "./SignUp/Header.css"
import Navbar from "./Navbar.jsx";
import logo from 'C:/Users/Kolaysoft/Desktop/amblem/Ekran görüntüsü 2024-03-25 165119.png';

function Header() {
    return (
        <header style={{height: 180}}>
            <div>
                <Navbar/>
            </div>
            <div className="logo">
                <img src={logo} alt="Website Logo" style={{width:150, height:150}}/>
            </div>
            <div style={{marginLeft: 300, marginTop: 60}}>
                <h1>Welcome to My Websiteeee</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">LogIn</a></li>
                        <li><a href="/signup">SignUp</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}

export default Header;
