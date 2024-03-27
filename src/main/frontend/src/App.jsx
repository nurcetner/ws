import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./pages/Header.jsx";
import "./css/layout.css";

    function App() {
        return (
            <div>
                <div><Header/></div>
                <div><Outlet/></div>
            </div>

        )
    }

export default App;