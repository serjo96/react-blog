import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Post extends Component {
    render() {
        const post = this.props.posts.find((item) => item.id === +this.props.match.params.postId);
        if (!post) {
            return (
                <div className="main">
                    Такой записи не существует
                </div>
            );
        }
        return (
            <div className="main">
                <div className="full-post">
                    <div className="btn btn-nav">
                        <Link to="/" className="btn__buck">Назад</Link>
                    </div>
                    <div className="full-post__data">
                        <div className="full-post__title">{post.title}</div>
                        <div className="full-post__content">{post.post}</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Post)