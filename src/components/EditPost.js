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

  useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  render() {

    // const classes = useStyles();

    return (
        <Container maxWidth="md">
        <div class="panel panel-default">

          <div class="panel-body">
            
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>
              
      
<TextField
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

{/* <TextField
  multiline={true}
  Value={this.state.text} 
  onChange={this.onChange}
  id="outlined-multiline-static"
  type="text"
  name="text"
        //   label="Multiline"
          rows="14"
        //   className={classes.textField}
          margin="normal"
          variant="outlined"
          multiline
          defaultValue="Default Value"       
        />
 */}

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