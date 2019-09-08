import React from 'react';
import App from './App';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';

class PostItem extends React.Component {
    render() {
        return (
            <Container maxWidth="sm">
            <Grid container spacing={0}>                
                <Grid item xs={12}>        
                    <article>
                        <h2>Oliver The Beagle meets his owner for the first time in three months!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed maximus mi, id feugiat nulla. Nunc in viverra orci.Lorem ipsum dolor sit amet...</p>
                    </article>              
                </Grid>
                <Grid item xs={12}>        
                    <article>
                        <h2>Oliver The Beagle meets his owner for the first time in three months!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed maximus mi, id feugiat nulla. Nunc in viverra orci.Lorem ipsum dolor sit amet...</p>
                    </article>              
                </Grid>
                <Grid item xs={12}>        
                    <article>
                        <h2>Oliver The Beagle meets his owner for the first time in three months!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed maximus mi, id feugiat nulla. Nunc in viverra orci.Lorem ipsum dolor sit amet...</p>
                    </article>              
                </Grid>
                <Grid item xs={12}>        
                    <article>
                        <h2>Oliver The Beagle meets his owner for the first time in three months!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed maximus mi, id feugiat nulla. Nunc in viverra orci.Lorem ipsum dolor sit amet...</p>
                    </article>              
                </Grid>                                                            
            </Grid>
            </Container>
        )
    }
}

export default PostItem;