import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 40
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


export default function ButtonAppBar() {
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
        </Container>
      </AppBar>
    </div>
  );
}