import React from 'react';
import Header from '../components/Header';
import PostItem from './PostItem';
import Create from './Create';
import '../components/Main.css';

function Home(props) {

    return (
        <PostItem articles={props.articles} />
    );
    
}

export default Home;