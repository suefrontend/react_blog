import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from '../pages/Home';
import Edit from '../pages/Edit';
import Show from '../pages/Show';
import Create from '../pages/Create';
import EditPost from '../pages/EditPost';
import './Main.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import { db } from "../Firebase";
import { getThemeProps } from '@material-ui/styles';

function App() {
    
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        return db.collection('articles').onSnapshot(query => {
            setArticles( query.docs.map(m => m.data()) );
          });        
        
    }, []);

    return (
        <div>
            <Router history={history}>
                <Header />
                    <Switch>
                        <Route exact path='/' render={(routeProps) => (<Home {...routeProps} articles={articles}/>)}  />
                        <Route exact path='/create' component={Create} />
                        <Route exact path='/edit' component={Edit} />
                        <Route exact path='/editPost/:id' component={EditPost} />
                        <Route exact path='/show/:id' component={Show}  />
                    </Switch>
            </Router>
    </div>
    );
}

export default App;