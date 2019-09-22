import React from 'react';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    TextField
  } from "@material-ui/core";

function Create() {
    return (
<div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "50%" }}>
          <h1>Create New Post</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="title">Title</InputLabel>
            <Input id="title" type="text" />
          </FormControl>


          <FormControl margin="normal" fullWidth>
          <TextField
        id="standard-multiline-static"
        label="Description"
        multiline
        rows="4"
        placeHolder="Write Something..."
        // className={classes.textField}
        margin="normal"
      />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="description">YouTube URL</InputLabel>
            <Input id="youtubeURL" type="text" />
          </FormControl>

          <Button variant="contained" color="primary" size="medium">
            Post
          </Button>
        </form>
      </div>
    );
}

export default Create;