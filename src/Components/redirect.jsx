import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Redirect = () => {
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated) {
        // Redirect
        return (
            <Navigate to='/' />
        );
    } else {
        return (
            <Navigate to='/Dashboard' />
        );
    }
};

export default Redirect;