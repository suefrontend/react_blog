import React from 'react';
import Header from '../components/Header';
import PostItem from './PostItem';
import Create from './Create';
import '../components/Main.css';

function Home(props) {
    console.log(props.articles);
    return (
        <div>
        <PostItem articles={props.articles} />
        {/* {articles.map(m => <li>{m.title}</li>)} */}
        </div>
    );
}

export default Home;