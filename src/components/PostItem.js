import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import { db } from "../firebase";

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
        <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                BOARD LIST
              </h3>
            </div>
            <div class="panel-body">
              <h4><Link to="/create">Add Board</Link></h4>
              <table class="table table-stripe">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.articles.map(article =>
                    <tr>
                      <td><Link to={`/show/${article.key}`}>{article.title}</Link></td>
                      <td>{article.text}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }

export default PostItem;