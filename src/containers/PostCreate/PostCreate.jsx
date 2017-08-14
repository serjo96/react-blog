import React, {Component} from 'react';
import PostForm from '../PostForm/PostForm';
import PostList from '../PostList/PostList';

export default class PostCreate extends Component {
    render() {
        return (
            <div>
                <PostForm />
                <PostList />
            </div>
        )
    }
}

