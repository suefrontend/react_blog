import React from 'react';
import { db } from "../Firebase";
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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
      <Container maxWidth="md">
                
            
          

<Table aria-label="simple table">
<TableBody>
{this.state.articles.map(article =>
            <TableRow>
              <TableCell component="th" scope="row">
              {article.title}
              </TableCell>
              <TableCell align="right">
                
                
              <Link to={`/EditPost/${article.key}`}><Button variant="contained" color="primary" >
              Edit
      </Button></Link>
               
                </TableCell>
              <TableCell align="right">
                
              <Link to={`/EditPost/${article.key}`}><Button variant="contained" color="secondary" onClick={this.delete.bind(this, article.key)}>
              Delete
      </Button></Link>
                
                
                </TableCell>              
            </TableRow>
          )}
        </TableBody>
      </Table>
              
          
      </Container>
    );
  }
}

export default Edit;