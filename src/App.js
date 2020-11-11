import React, { Component } from "react";
import "./App.css";
import SeasonDisplay from "./components/SeasonDisplay";

class App extends Component {
	// lat is latitude
	state = { lat: null, lng: null, errorMsg: "" };

	componentDidMount() {
		// get the user current location
		window.navigator.geolocation.getCurrentPosition(
			(position) =>
				this.setState({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				}),
			(err) => this.setState({ errorMsg: err.message })
		);
	}

	render() {
		if (this.state.errorMsg && !this.state.lat) {
			return <div>Error: {this.state.errorMsg}</div>;
		}

		if (!this.state.errorMsg && this.state.lat) {
			return (
				<SeasonDisplay latitude={this.state.lat} longitude={this.state.lng} />
			);
		}

		return <div>Loading</div>;
	}
}

export default App;
