import React from "react";

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

	const { text, iconName } = seasonConfig[season];

	console.log(season);
	return (
		<div className="seasonDisplay">
			<i className={`icon ${iconName}`} />
			<h2>{text}</h2>
		</div>
	);
};

export default SeasonDisplay;
