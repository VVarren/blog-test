import react from "react";
import App from "./App.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { directive } from "@babel/types";
import AllBlogs from "./BlogList.js";

export default function Main() {
	return (
		<>
			<Router>
				<div>
					<ul>
						<Link to="/Main">Main</Link>
					</ul>
					<ul>
						<Link to="/App">App</Link>
					</ul>
					<ul>
						<Link to="/AllBlogs">All the blogs</Link>
					</ul>
				</div>
				<Switch>
					<Route path="/App">
						<App />
					</Route>
					<Route path="/Home">
						<Home />
					</Route>
					<Route path="/AllBlogs" component={AllBlogs}></Route>
				</Switch>
			</Router>
		</>
	);
}
function Home() {
	return <h2>Home</h2>;
}
