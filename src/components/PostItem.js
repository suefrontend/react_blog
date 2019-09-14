import React from 'react';
import App from './App';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import { db } from "../firebase";

const useStyles = theme => ({
    "grid": {
        marginBottom: 30,
    }
  });

class PostItem extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        db.collection("articles")
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            this.setState({ articles: data });
          });
    }

    render() {
        const { classes } = this.props;
        const { articles } = this.state;

    return (
        <Container maxWidth="md" position="relative">
            <Grid container>
                {articles.map(article => (             
                    <Grid item xs={12} className={classes.grid}>       
                        <article>
                            <Typography component="h2" variant="display1" className={classes.typography}>
                            {article.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>{article.text}...</Typography>
                        </article>           
                    </Grid>
                ))}                                                               
            </Grid>
        </Container>
    )}
}

export default withStyles(useStyles)(PostItem);