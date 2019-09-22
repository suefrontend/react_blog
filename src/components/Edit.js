import React from 'react';
import { db } from "../firebase";
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class Edit extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        db.collection("articles")
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            this.setState({ articles: data });
          });
    }

    render() {
        const { classes } = this.props;
        const { articles } = this.state;

    return (
        <Container maxWidth="md">
<Table>
<TableHead>
                    <TableRow>
                      <TableCell><b>Title</b></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                {articles.map(article => (    
                    
                    
<TableBody>
     


              <TableCell>{article.title}</TableCell>           
              <TableCell><Button variant="contained" color="primary">
        Edit
      </Button>
      </TableCell>           
              <TableCell>
                  <Button variant="contained" color="secondary">Delete</Button>
              </TableCell>           
                    
                   
                   
                    
                </TableBody>                                                          
                ))}     
</Table>
        </Container>
    )}
}

export default Edit;