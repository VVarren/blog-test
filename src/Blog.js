import react from "react";
import "./Blog.css";

function Blog(props) {
	return (
		<div className="blog">
			<div>{props.title}</div>
			<div>{props.description}</div>
		</div>
	);
}
/*
 */

export default Blog;
