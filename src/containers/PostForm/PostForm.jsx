import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/posts-action';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            post: ''
        }
    }

    clearInputs(){
        this.setState({
            title: '',
            post: ''
        })
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = () =>{
        if(this.state.title.length === 0 || this.state.post.length === 0){
            alert('Заполните поля');
        } else {
            this.props.addPost({
                title: this.state.title,
                post: this.state.post,
                id: Math.floor(Math.random() * (250 - 1) + 1)
            });
            this.clearInputs();
        }
	};

    render() {
        return (
				<div className="add-form">
                    <div className="main">
                        <h1 className=" add-form__title">Форма создания поста</h1>
                        <div className="add-post-form">
                            <div className="add-form__inputs form-inputs">

                                    <input
                                        onChange={this.onInputChange}
                                        className="form-inputs__item form-inputs__title-post"
                                        name="title"
                                        placeholder="Название поста"
                                        type="text"
                                        value={this.state.title}
                                    />

                                <textarea
                                    onChange={this.onInputChange}
                                    className="form-inputs__item form-inputs__post"
                                    name="post"
                                    placeholder="Содержание поста"
                                    type="text"
                                    value={this.state.post}
                                />

                            </div>
                            <div className="btn add-post-form__submit clearfix">
                                <button className="btn__add-post" onClick={this.onSubmit}>Создать пост</button>
                            </div>

                        </div>
					</div>
				</div>
        )
    }
}

const mapStateToProps = (state) => ({
    addPost: state.addPost
});

export default connect(mapStateToProps, {addPost})(PostForm)
