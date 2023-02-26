import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";

const Myroute =()=>{

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </Router>
    )

}

export default Myroute;