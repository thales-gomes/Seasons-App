import React from "react";
import getSeason from "./getSeason";
import seasonConfig from "./seasonConfig";

const month = new Date().getMonth;

const SeasonDisplay = (props) => {
	const { lat } = props;
  const season = getSeason(lat, month);
  const seasonInfo = seasonConfig[season];
  const { text, iconName } = seasonInfo;
	return (
		<div>
			<i className={`icon ${iconName}`}></i>
			<h1>{text}</h1>
			<i className={`icon ${iconName}`}></i>
		</div>
	);
};

export default SeasonDisplay;
