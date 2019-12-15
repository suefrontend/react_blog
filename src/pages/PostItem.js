import React, { useState } from 'react';
import App from '../components/App';
import { Link } from 'react-router-dom';
import { db } from "../Firebase";
import Container from '@material-ui/core/Container';
import '../components/Main.css';

function PostItem(props) {

  const [doc, docState] = useState(props.articles);

  // constructor(props) {
  //   super(props);
  //   this.ref = db.collection('articles');
  //   this.unsubscribe = null;
  //   this.state = {
  //     articles: []
  //   };
  // }

  // onCollectionUpdate = (querySnapshot) => {
  //   const articles = [];
  //   querySnapshot.forEach((doc) => {
  //     const { title, text } = doc.data();
  //     articles.push({
  //       key: doc.id,
  //       doc, // DocumentSnapshot
  //       title,
  //       text
  //     });
  //   });
  //   this.setState({
  //     articles
  //  });
  // }

  // componentDidMount() {
  //   this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  // }

    return (

      <Container maxWidth="md">
        
                {props.articles.map(article =>
                  <div className="panel">
                    <h2><Link to={`/show/${article.key}`}>{article.title}</Link></h2>
                    <p>{article.text}</p>
                  </div>
                )}
        
      </Container>
      
    );
}

export default PostItem;