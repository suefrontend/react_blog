import React from 'react';
import { db } from "../firebase";
import { Link } from 'react-router-dom';

class Edit extends React.Component {
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
      const { title, text, key } = doc.data();
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

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({articles:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, text, author } = this.state;

    const updateRef = db.collection('articles').doc(this.state.key);
    updateRef.set({
      title,
      text
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        text: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }


  delete(key){
    {this.state.articles.map(article =>
    console.log(`${article.key}`), "inside delete function");
    }
    db.collection('articles').doc(key).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">          
          <div class="panel-body">            
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {this.state.articles.map(article =>
                  <tr>
                    <td>{article.title}</td>
                    
                    <td><Link to={`/EditPost/${article.key}`}><button class="btn btn-success">Edit</button></Link></td>
                    <td><button onClick={this.delete.bind(this, article.key)} class="btn btn-danger">Delete</button></td>
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

export default Edit;