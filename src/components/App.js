import React from 'react';
import Header from './Header';
import Home from './Home';
import Edit from './Edit';
import Create from './Create';
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
        </Switch>
    </Router>
    );
}

export default App;