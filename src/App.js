import "./App.css";
import React, { useState } from "react";
import Blog from "./Blog.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	const [title, settitle] = useState("");
	const [description, setdescription] = useState("");
	const [blogs, setblogs] = useState([]);

	function addBlog(title, description) {
		const blog = {
			title,
			description,
		};
		setblogs([...blogs, blog]);
	}
	const blogE = blogs.map((blog) => (
		<Blog title={blog.title} description={blog.description} />
	));
	function handleclick() {
		addBlog(title, description);
		settitle("");
		setdescription("");
	}

	return (
		<>
			<div className="flex-container">
				<input
					placeholder="Whats the title?"
					onChange={(e) => settitle(e.target.value)}
					value={title}
				></input>
				<textarea
					rows="5"
					cols="33"
					placeholder="Description"
					onChange={(e) => setdescription(e.target.value)}
					value={description}
				></textarea>
				<button onClick={() => setblogs(blogs.slice(0, blogs.length - 1))}>
					Delete
				</button>
				<button className="add" onClick={handleclick}>
					+ Add the blog +
				</button>
			</div>
			{blogE}
		</>
	);
}

export default App;
