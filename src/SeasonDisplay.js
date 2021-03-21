import React from "react";
import getSeason from "./getSeason";

const month = new Date().getMonth;

const SeasonDisplay = (props) => {
	const { lat } = props;
	const season = getSeason(lat, month);
	const textDisplay =
		season === "summer" ? "Let's hit the beach" : "Buur, it's chilly!";
	return <div><h1>{textDisplay}</h1></div>;
};

export default SeasonDisplay;
