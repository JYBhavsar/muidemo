import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login =(props)=>{
    
    const navigate = useNavigate();
    const paperStyle={
        padding: 20,
        height: '70vh',
        width: 280,
        margin: '20px auto'
    }
    const avatarStyle={
        backgroundColor:'green' 
    }
    const loginbtn={
        margin: '8px 0'
    }
    localStorage.setItem("enabled",false);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    
    const users = [{ username: "admin", password: "123" }];
    const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            setauthenticated(true);
            if(authenticated){
                props.showAlert("Logged In Successfully","success");
                localStorage.setItem("authenticated", true);
                localStorage.setItem("token","2010961130");
                navigate("/dashboard");
            }
        }else{
            props.showAlert("Invalid Credentials","error")
        }
    };

    const handleForgetClick =()=>{
        props.showAlert("Page is not available.","warning");
    };

   return (
        <>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}>
                   <LoginSharpIcon></LoginSharpIcon> 
                </Avatar>
                <h4>Sign In</h4>
                <form onSubmit={handleSubmit} >
                    <TextField style={loginbtn} id="username" label="UserName" placeholder="Enter Username" variant="outlined" 
                    fullWidth required value={username} onChange={e=>setusername(e.target.value)}  />
                    
                    <TextField type="password" id="password" label="Password" placeholder="Enter Password" variant="outlined" 
                    fullWidth required value={password} onChange={e=>setpassword(e.target.value)} />
                    
                    <FormControlLabel 
                        control={
                            <Checkbox name="checklg" color="primary" />
                        } label="Remember me" />
                        
                    <Button type="submit" style={loginbtn} color="primary" variant="outlined" fullWidth>Login</Button>    
                </form>
                    <Typography>
                        <Link href="/" onClick={handleForgetClick} >Forget Password ?</Link>
                        <Link href="/" onClick={handleForgetClick}>Sign up ?</Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
        
        </>
    )
}


export default Login