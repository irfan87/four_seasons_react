import React from "react";

const SeasonDisplay = ({ latitude, longitude }) => {
	return (
		<div className="seasonDisplay">
			<h1>Season Display</h1>
			<p>{latitude}</p>
			<p>{longitude}</p>
		</div>
	);
};

export default SeasonDisplay;
