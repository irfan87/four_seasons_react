import React, { Component } from "react";
import "./App.css";
import SeasonDisplay from "./components/SeasonDisplay";

class App extends Component {
	render() {
		// get the user current location
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log("current position", position);
			},
			(err) => console.error(err)
		);

		return (
			<div className="app">
				<h2>Latitude: </h2>
				<SeasonDisplay />
			</div>
		);
	}
}

export default App;
