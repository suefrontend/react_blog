import React from 'react';
import { db } from "../Firebase";
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
           
             <p>{this.state.articles.text}</p>
             
             <Link to={`/EditPost/${this.state.key}`}><Button variant="contained" color="primary" >
              Edit
      </Button></Link>

              <Button variant="contained" color="secondary" onClick={this.delete.bind(this, this.state.key)}>
              Delete
      </Button>
              
          
        </Container>
      );
    }
  }
  
  export default Show;