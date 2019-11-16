import React from 'react';
import { db } from "../firebase";
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

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
        <Container maxWidth="md">
         
            
              <h3 class="panel-title">
                {this.state.articles.title}
              </h3>
           
              <dl>
                <dt>Description:</dt>
                <dd>{this.state.articles.text}</dd>
              </dl>
              <Link to={`/EditPost/${this.state.articles.key}`}><Button variant="contained" color="secondary" onClick={this.delete.bind(this, this.state.articles.key)}>Edit</Button></Link>


              <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          
        </Container>
      );
    }
  }
  
  export default Show;