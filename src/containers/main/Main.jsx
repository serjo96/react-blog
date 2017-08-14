import React, {Component} from 'react';
import {  Route, Switch, withRouter } from 'react-router-dom'

import PostCreate from '../PostCreate/PostCreate';
import Post from '../../components/Post/Post';

class Main extends Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={PostCreate} />
                    <Route path="/post:postId" component={Post} />
                </Switch>
            </main>
        )
    }
}

export default withRouter(Main)