import React from 'react';
import Header from './Header';
import PostItem from './PostItem';
import Container from '@material-ui/core/Container';
import './Main.css';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <PostItem />            
        </React.Fragment>
    );
}

export default App;