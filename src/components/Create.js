import React from 'react';
import { Link } from 'react-router-dom';
  import { db } from "../firebase";
  import firebase from "firebase";
  import ReactDOM from 'react-dom';

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
        <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                ADD BOARD
              </h3>
            </div>
            <div class="panel-body">
              <h4><Link to="/" class="btn btn-primary">Book List</Link></h4>
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="title">Title:</label>
                  <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                </div>
                <div class="form-group">
                  <label for="description">Description:</label>
                  <textArea class="form-control" name="text" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{text}</textArea>
                </div>                
                <button type="submit" class="btn btn-success">Submit</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Create;