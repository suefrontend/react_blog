import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

const Header = () => {
    return (
        <AppBar color="primary" position="static">
            <Container maxWidth="sm">
                <Toolbar>
            <h1>Dogs Video Library</h1>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </Container>
            </AppBar>
    )
}

export default Header;