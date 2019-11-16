import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import { db } from "../firebase";
import Container from '@material-ui/core/Container';
import './Main.css';

const useStyles = theme => ({
    "grid": {
        marginBottom: 30,
    }
  });

  class PostItem extends React.Component {
    constructor(props) {
      super(props);
      this.ref = db.collection('articles');
      this.unsubscribe = null;
      this.state = {
        articles: []
      };
    }
  
    onCollectionUpdate = (querySnapshot) => {
      const articles = [];
      querySnapshot.forEach((doc) => {
        const { title, text } = doc.data();
        articles.push({
          key: doc.id,
          doc, // DocumentSnapshot
          title,
          text
        });
      });
      this.setState({
        articles
     });
    }
  
    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
  
    render() {

      return (
        <Container maxWidth="md">
          
                  {this.state.articles.map(article =>
                    <div className="panel">
                      <h2><Link to={`/show/${article.key}`}>{article.title}</Link></h2>
                      <p>{article.text}</p>
                    </div>
                  )}
         
        </Container>
      );
    }
  }

export default PostItem;