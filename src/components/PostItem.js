import React from 'react';
import App from './App';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    grid: {
      marginBottom: 30,
    }
  }));

function PostItem(){
    const classes = useStyles();
    return (
        <Container maxWidth="md" position="relative">
        <Grid container>                
            <Grid item xs={12} className={classes.grid}>       
                <article>
                    <Typography component="h2" variant="display1" className={classes.typography}>
                    Oliver The Beagle meets his owner for the first time in three months!
                    </Typography>
                    <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed maximus mi, id feugiat nulla. Nunc in viverra orci.Lorem ipsum dolor sit amet...</Typography>
                </article>           
            </Grid>
            <Grid item xs={12} className={classes.grid}>        
                <article>
                    <Typography component="h2" variant="display1" className={classes.typography}>
                    Oliver The Beagle meets his owner for the first time in three months!
                    </Typography>
                    <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed maximus mi, id feugiat nulla. Nunc in viverra orci.Lorem ipsum dolor sit amet...</Typography>
                </article>              
            </Grid>
            <Grid item xs={12} className={classes.grid}>        
                <article>
                    <Typography component="h2" variant="display1" className={classes.typography}>
                    Oliver The Beagle meets his owner for the first time in three months!
                    </Typography>
                    <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed maximus mi, id feugiat nulla. Nunc in viverra orci.Lorem ipsum dolor sit amet...</Typography>
                </article>              
            </Grid>
            <Grid item xs={12} className={classes.grid}>        
                <article>
                    <Typography component="h2" variant="display1" className={classes.typography}>
                    Oliver The Beagle meets his owner for the first time in three months!
                    </Typography>
                    <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed maximus mi, id feugiat nulla. Nunc in viverra orci.Lorem ipsum dolor sit amet...</Typography>
                </article>              
            </Grid>                                                            
        </Grid>
        </Container>
    )
}

export default PostItem;