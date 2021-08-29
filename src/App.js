import "./App.css";
import React, { useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>{count}</button>
			<button onClick={() => setCount(count - 1)}>{count}</button>
		</div>
	);
}

export default App;
