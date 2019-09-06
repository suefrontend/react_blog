import React from 'react';
import PostItem from './PostItem';
import Container from '@material-ui/core/Container';

const App = () => {
    return (
        <Container maxWidth="sm">
            <PostItem />
        </Container>
    );
}

export default App;