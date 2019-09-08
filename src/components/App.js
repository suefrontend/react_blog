import React from 'react';
import PostItem from './PostItem';
import Header from './Header';
import Container from '@material-ui/core/Container';
import './Main.css';

const App = () => {
    return (
        <div>
            <Header />
            <Container maxWidth="sm">
                <PostItem />
            </Container>
        </div>
    );
}

export default App;