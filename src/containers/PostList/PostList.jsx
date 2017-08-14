import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostItem from '../../components/Post/PostItem';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
			count: 3
		}
	}

    loadMore = () => {
		this.setState({
			count: this.state.count += 3
		})
	};

	render() {
		if(this.props.posts.length > 0){
			return (
				<div className='post-list'>
					{this.props.posts.slice(0, this.state.count).map((item, index) =>
						<PostItem
							title={item.title}
							post={item.post}
							key={index}
							id={item.id}
						/>
                    )}
					<div className="main">
						{this.state.count < this.props.posts.length && <div onClick={this.loadMore} className="load-more">Показать еще</div>}
					</div>

					</div>
			)
		}else {
			return(
				null
			)
		}
	}
}

function mapStateToProps (state) {
	return {
        posts: state.posts
	}
}




export default connect(mapStateToProps)(PostList)
