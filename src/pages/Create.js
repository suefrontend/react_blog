import React from 'react';
import { Link } from 'react-router-dom';
  import { db } from "../firebase";
  import firebase from "firebase";
  import ReactDOM from 'react-dom';
  import Container from '@material-ui/core/Container';
  import Button from '@material-ui/core/Button';
  import TextField from '@material-ui/core/TextField';
  import { makeStyles } from '@material-ui/core/styles';

  class Create extends React.Component {

    constructor() {
      super();
      this.ref = db.collection('articles');
      this.state = {
        title: '',
        description: ''
      };
    }
    onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }
  
    onSubmit = (e) => {
      e.preventDefault();
  
      const { title, text } = this.state;
  
      this.ref.add({
        title,
        text        
      }).then((docRef) => {
        this.setState({
          title: '',
          text: ''
        });
        this.props.history.push("/")
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    }
  
    render() {
      const { title, text } = this.state;

      return (
        <Container maxWidth="md">
          <div class="panel panel-default">

            <div class="panel-body">
              
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  
                  <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                </div>
                <div class="form-group">

                  <textArea class="form-control" name="text" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{text}</textArea>

                </div>      


                <Button type="submit" variant="contained" >
                Submit
      </Button>


                {/* <button type="submit" class="btn btn-success">Submit</button> */}
              </form>
            </div>
          </div>
        </Container>
      );
    }
  }
  
  export default Create;