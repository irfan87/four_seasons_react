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
	const seasonIcon = season === "winter" ? "snowflake" : "sun";

	console.log(season);
	return (
		<div className="seasonDisplay">
			{season ? (
				<>
					<i className={`icon ${seasonIcon}`} />
					<p>Let's hit the beach!</p>
				</>
			) : (
				<>
					<i className={`icon ${seasonIcon}`} />
					<p>Eh?? So cold today, eh??</p>
				</>
			)}
		</div>
	);
};

export default SeasonDisplay;
