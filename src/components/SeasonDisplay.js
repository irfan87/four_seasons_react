import React from "react";

import "./SeasonDisplay.css";

// config the season
const seasonConfig = {
	summer: {
		text: "Let's hit the beach",
		iconName: "sun",
	},
	winter: {
		text: "Eh?? So cold today, eh?",
		iconName: "snowflake",
	},
};

// determine the season by month
const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat < 0 ? "winter" : "summer";
	}
};

const SeasonDisplay = ({ latitude, longitude }) => {
	const season = getSeason(latitude, new Date().getMonth());

	const { text, iconName } = seasonConfig[season];

	// or you can use BEM convention if you prefer
	return (
		<div className={`seasonDisplay ${season}`}>
			<i className={`icon ${iconName} massive seasonDisplay__iconLeft`} />
			<h2>{text}</h2>
			<i className={`icon ${iconName} massive seasonDisplay__iconRight`} />
		</div>
	);
};

export default SeasonDisplay;
