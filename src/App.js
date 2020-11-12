import React, { Component } from "react";
import "./App.css";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

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
		const { lat, lng, errorMsg } = this.state;

		if (errorMsg && !lat) {
			return <div>Error: {errorMsg}</div>;
		}

		if (!errorMsg && lat) {
			return <SeasonDisplay latitude={lat} longitude={lng} />;
		}

		return <Spinner />;
	}
}

export default App;
