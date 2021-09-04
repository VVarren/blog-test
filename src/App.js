import "./App.css";
import React, { useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	const [title, settitle] = useState("");
	return (
		<div className="flex-container">
			<input
				placeholder="Whats the title?"
				onChange={(e) => settitle(e.target.value)}
				value={title}
			></input>
			<textarea rows="5" cols="33"></textarea>
			<button className="add" onClick={() => setCount()}>
				+ Add the blog +
			</button>
		</div>
	);
}

export default App;
