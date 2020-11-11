import React from "react";

// determine the season
const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat < 0 ? "winter" : "summer";
	}
};

const SeasonDisplay = ({ latitude, longitude }) => {
	const season = getSeason(latitude, new Date().getMonth());
	console.log(season);

	return (
		<div className="seasonDisplay">
			<h1>Season Display</h1>
			<p>{latitude}</p>
			<p>{longitude}</p>
		</div>
	);
};

export default SeasonDisplay;
