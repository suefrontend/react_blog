import React from 'react';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

class EditPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      text: ''
    };
  }

  componentDidMount() {
    const ref = db.collection('articles').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          title: board.title,
          text: board.text
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, text } = this.state;

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

  
  
  render() {

    return (
        <Container maxWidth="md">
        <div class="panel panel-default">

          <div class="panel-body">
            
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>
              
      
<textarea
//   placeholder="MultiLine with rows: 2 and rowsMax: 4"
  multiline={true}
value={this.state.text} 
onChange={this.onChange}
id="outlined-multiline-static"
//   label="Multiline"
multiline
rows="4"
name="text"
defaultValue="Default Value"        
/><br />


              <Button variant="contained" type="submit">
              Submit
      </Button>

              
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default EditPost;