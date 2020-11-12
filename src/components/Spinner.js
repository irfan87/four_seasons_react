import React from "react";

// if we don't provide message prop from parent - in this case, App.js,
// we set message as the defaultProps
const Spinner = ({ message }) => {
	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">{message}</div>
		</div>
	);
};

Spinner.defaultProps = {
	message: "Loading",
};

export default Spinner;
