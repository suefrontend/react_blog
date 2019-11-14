import React from 'react';
import Header from './Header';
import Home from './Home';
import Edit from './Edit';
import Show from './Show';
import Create from './Create';
import EditPost from './EditPost';
import './Main.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

function App() {
    return (
    <Router history={history}>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/create' component={Create} />
            <Route exact path='/edit' component={Edit} />
            <Route exact path='/editPost/:id' component={EditPost} />
            <Route exact path='/show/:id' component={Show} />
        </Switch>
    </Router>
    );
}

export default App;