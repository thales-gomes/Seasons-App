import React from "react";
import getSeason from "./getSeason";

const month = new Date().getMonth;

const SeasonDisplay = (props) => {
	const { lat } = props;
	const season = getSeason(lat, month);
	const textDisplay =
		season === "summer" ? "Let's hit the beach" : "Buur, it's chilly!";
	const icon = season === "summer" ? "sun" : "snowflake";
	return (
		<div>
			<i className={`icon ${icon}`}></i>
			<h1>{textDisplay}</h1>
			<i className={`icon ${icon}`}></i>
		</div>
	);
};

export default SeasonDisplay;
