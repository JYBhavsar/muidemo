import React from "react";
import { Container, Typography } from '@mui/material';


const Dashboard = (props) => {

    const token = localStorage.getItem("token");
    const authenticated = localStorage.getItem("authenticated");

    return (
        <>
            {authenticated && token==="2010961130"?
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome To Dashboard
                </Typography>
            </Container>
            :<>Sorry You are not logged in let's back to <a href='/'>HOME</a> page !</>}
        </>
        
    );
};

export default Dashboard;