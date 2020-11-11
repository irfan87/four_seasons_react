import React, { Component } from "react";
import "./App.css";
import SeasonDisplay from "./components/SeasonDisplay";

class App extends Component {
	constructor(props) {
		super(props);

		// lat is latitude
		this.state = { lat: null };

		// get the user current location
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// to update or call the object, use this.setState({})
				this.setState({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
			},
			(err) => console.error(err)
		);
	}

	render() {
		return (
			<div className="app">
				<h2>Latitude: {this.state.lat}</h2>
				<h2>Longitude: {this.state.lng}</h2>
				<SeasonDisplay />
			</div>
		);
	}
}

export default App;
