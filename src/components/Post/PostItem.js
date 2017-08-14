import React from 'react';
import { Link } from 'react-router-dom'

const PostItem = (props) => (
	<div className='post-item' id={props.id} >
		<div className="main post-item__data">
				<div className="post-item__title">
					<Link to={'/post' + props.id}>
						{props.title}
					</Link>
				</div>
			<div className="post-item__post">{props.post}</div>
		</div>
	</div>
);

export default PostItem;
