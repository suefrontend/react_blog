import React from 'react';
import { db } from "../firebase";
import { Link } from 'react-router-dom';


class Show extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        articles: {},
        key: ''
      };
    }
  
    componentDidMount() {
      const ref = db.collection('articles').doc(this.props.match.params.id);
      ref.get().then((doc) => {
        if (doc.exists) {
          this.setState({
            articles: doc.data(),
            key: doc.id,
            isLoading: false
          });
        } else {
          console.log("No such document!");
        }
      });
    }
  
    delete(id){
      db.collection('articles').doc(id).delete().then(() => {
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
            <div class="panel-heading">
            <h4><Link to="/">Board List</Link></h4>
              <h3 class="panel-title">
                {this.state.articles.title}
              </h3>
            </div>
            <div class="panel-body">
              <dl>
                <dt>Description:</dt>
                <dd>{this.state.articles.text}</dd>
              </dl>
              <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
              <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Show;