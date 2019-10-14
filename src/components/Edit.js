import React from 'react';
import { db } from "../firebase";
import { Link } from 'react-router-dom';

class Edit extends React.Component {

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
        const articles = doc.data();
        this.setState({
          key: doc.id,
          title: articles.title,
          text: articles.text
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({articles:state});
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
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT BOARD
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Board List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="text">Description:</label>
                <input type="text" class="form-control" name="text" value={this.state.text} onChange={this.onChange} placeholder="Description" />
              </div>              
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;