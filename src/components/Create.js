import React from 'react';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    TextField
  } from "@material-ui/core";
  import { db } from "../firebase";
  import firebase from "firebase";

  class Create extends React.Component {

    state = {
      title: "",
      text: ""
     };

     updateInput = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    addUser = e => {
      e.preventDefault();
      // const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      const userRef = db.collection("articles").add({
        title: this.state.title,
        text: this.state.text
      });  
      this.setState({
        title: "",
        text: ""
      });
    };

    render() {
      return (
          <form onSubmit={this.addUser}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.updateInput}
              value={this.state.title}
            />
            <input
              type="text"
              name="text"
              placeholder="Description"
              onChange={this.updateInput}
              value={this.state.text}
            />
            <button type="submit">Submit</button>
          </form>
          );
    }
}

export default Create;