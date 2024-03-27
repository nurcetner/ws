import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/Home/index.jsx";
import {SignUp} from "../pages/SignUp/index.jsx";
import {Login} from "../pages/LogIn/index.jsx";
import App from "../App";

export default createBrowserRouter([
    {
        path: "/",
        Component: App,
        children:[
            {
                path:"/",
                index:true,
                Component:Home,
                errorElement: "Unexpected Error"
            },
            {
                path:"/signup",
                Component:SignUp
            },
            {
                path:"/login",
                Component:Login
            },
        ]
    }

])

