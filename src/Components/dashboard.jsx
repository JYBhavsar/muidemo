import React from "react";
import { Container, Typography } from '@mui/material';


const Dashboard = () => {

    return (
        <>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome To Dashboard
                </Typography>
            </Container>
        </>
    );
};

export default Dashboard;