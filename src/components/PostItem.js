import React from 'react';
import App from './App';
import { Grid } from '@material-ui/core';

class PostItem extends React.Component {
    render() {
        return (
            <div>
                <Grid container spacing={5}>                
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
            </div>
        )
    }
}

export default PostItem;