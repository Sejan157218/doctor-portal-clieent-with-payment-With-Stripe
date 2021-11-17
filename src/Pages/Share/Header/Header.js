import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Header = () => {
    const { user, logout } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <NavLink style={{ textDecoration: "none", color: "#ffff" }} to="/appointment"> <Button color="inherit">Appointment</Button></NavLink>
                    {
                        user?.email ?
                            <>
                                <NavLink style={{ textDecoration: "none", color: "#ffff" }} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
                                <Button onClick={logout} style={{ textDecoration: "none", color: "#ffff" }} color="inherit">LogOut</Button>
                            </>
                            :
                            <NavLink style={{ textDecoration: "none", color: "#ffff" }} to="/login"><Button color="inherit">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;