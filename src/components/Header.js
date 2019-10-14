import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 40
  },
  nav: {
    display: 'flex',
    listStyle: 'none',
    padding: '0',
  },
  items: {
    marginRight: '10px',
  },  
  appbar: {
      padding: '10px 0'
  },
  subtitle: {
      fontSize: '90%'
  },
  title: {
    flexGrow: 1
  },
}));


function Header() {
  const classes = useStyles();

  
  return (
    <div className={classes.root}>       
      <AppBar position="static" color="inherit" elevation={0} className={classes.appbar}>
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar} disableGutters={true}>
            <div className={classes.title}>      
          <Typography component="h1" variant="display1">
            Dogs Video Library
          </Typography>
          <Typography variant="subtitle1" gutterBottom  className={classes.subtitle}>Lorem ipsum dolor sit amet consectetur</Typography>
            </div>  

          <Button variant="outlined" size="small" color="primary">Sign In</Button>
        </Toolbar>
          <ul className={classes.nav}>
            <li style={{marginRight:'20px'}}><Link to='/' style={{color:'#000', textDecoration: 'none'}}>Home</Link></li>
            <li className={classes.item} style={{marginRight:'20px'}}><Link to='/create' style={{color:'#000', textDecoration: 'none'}}>Create</Link></li>
            <li className={classes.item}><Link to='/edit/:id' style={{color:'#000', textDecoration: 'none'}}>Edit</Link></li>
          </ul>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;