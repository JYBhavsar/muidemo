import React from "react";
import { Container, Typography } from '@mui/material';
import FlashMessage from "./snackbar";

const Dashboard = () => {
    
    const success = localStorage.getItem("authenticated");

    return (
        <>
            {success ? <FlashMessage message={'Logged In'}/> : ''}
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome To Dashboard
                </Typography>
            </Container>
        </>
    );
};

export default Dashboard;